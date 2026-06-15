import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

// Client-side photo uploads for the quote form. Requires BLOB_READ_WRITE_TOKEN;
// without it, handleUpload throws and we return 400 (the form falls back to "text us photos").
export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;
  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: ["image/jpeg", "image/png", "image/webp", "image/heic"],
        maximumSizeInBytes: 15 * 1024 * 1024,
        addRandomSuffix: true
      }),
      onUploadCompleted: async () => {
        // Fires on Vercel (not localhost). Wire to CRM later if needed.
      }
    });
    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed." },
      { status: 400 }
    );
  }
}
