import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

// Client-upload handler for quote-form photos. Requires BLOB_READ_WRITE_TOKEN
// (a Vercel Blob store). Without it the client upload fails and the quote form
// falls back to a text-only submission.
export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;
  try {
    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: ["image/jpeg", "image/png", "image/webp"],
        maximumSizeInBytes: 8 * 1024 * 1024,
        addRandomSuffix: true
      })
      // No onUploadCompleted: the client already returns the blob URL with the
      // quote payload, so we skip the completion webhook (one less round-trip
      // and failure point on the upload).
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Upload failed." }, { status: 400 });
  }
}
