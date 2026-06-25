// Feature flags shared by client + server so the UI and the API can't drift.
// Photo uploads are paused while the Vercel Blob store 503s: this hides the field
// in QuoteForm AND makes the upload route refuse to mint Blob write tokens. Flip
// to true (after confirming a real Blob upload succeeds) to re-enable both at once.
export const PHOTO_UPLOADS_ENABLED = false;
