import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { PHOTO_UPLOADS_ENABLED } from "@/lib/flags";

// Client-upload handler for quote-form photos. Requires BLOB_READ_WRITE_TOKEN
// (a Vercel Blob store). Gated by the same flag as the form: while uploads are
// off it refuses to mint Blob write tokens, so the public route can't be abused
// to fill the store. Flip PHOTO_UPLOADS_ENABLED in lib/flags to re-enable both.
export async function POST(request: Request): Promise<NextResponse> {
  if (!PHOTO_UPLOADS_ENABLED) {
    return NextResponse.json({ error: "Uploads are disabled." }, { status: 403 });
  }
  try {
    const body = (await request.json()) as HandleUploadBody;
    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: ["image/jpeg", "image/png", "image/webp"],
        maximumSizeInBytes: 8 * 1024 * 1024,
        addRandomSuffix: true
      })
    });
    return NextResponse.json(result);
  } catch (error) {
    console.error("Blob upload handler failed:", error);
    return NextResponse.json({ error: "Upload failed." }, { status: 400 });
  }
}
