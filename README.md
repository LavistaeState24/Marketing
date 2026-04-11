# Lavista-Marketing

## Google Sheet Contact Form

The contact form posts successful enquiries to a Google Apps Script web app URL.

1. Create a Google Sheet with this header row:

```text
Submitted At | Full Name | Company / Project | Email | Phone | Message | Source Path
```

2. In the Sheet, open `Extensions > Apps Script` and add this script:

```js
const SHEET_NAME = "Sheet1";

function doPost(event) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = event.parameter;

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.fullName || "",
    data.company || "",
    data.email || "",
    data.phone || "",
    data.message || "",
    data.sourcePath || "",
  ]);

  return ContentService.createTextOutput("ok");
}
```

3. Deploy it from Apps Script:

```text
Deploy > New deployment > Web app
Execute as: Me
Who has access: Anyone
```

4. Copy `.env.example` to `.env` and replace the URL:

```text
VITE_GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

5. Restart the dev server after changing `.env`.
