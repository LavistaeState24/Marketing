const GOOGLE_SHEETS_WEB_APP_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL;

export function isGoogleSheetSubmissionConfigured() {
  return Boolean(GOOGLE_SHEETS_WEB_APP_URL);
}

export async function submitContactFormToGoogleSheet(formData) {
  const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(formData),
  });

  const text = await response.text();
  return JSON.parse(text);
}