/**
 * ============================================================================
 * NAMMA 3D LAB — GOOGLE APPS SCRIPT WEBHOOK FOR CUSTOM QUOTES
 * ============================================================================
 * 
 * INSTRUCTIONS TO DEPLOY:
 * 1. Open Google Sheets (create a new blank sheet or use your existing one).
 * 2. Name your sheet tab "Quotes" (or the first tab).
 * 3. In the menu, go to: Extensions > Apps Script.
 * 4. Paste this entire code into the Code.gs editor (replace any existing code).
 * 5. Click "Deploy" (top right) > "New deployment".
 * 6. Select type: "Web app".
 * 7. Set:
 *    - Description: "Namma 3D Lab Quote Webhook"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (crucial so your website can send leads without login)
 * 8. Click "Deploy", authorize permissions when prompted, and COPY the Web App URL.
 * 9. Add that URL to your .env.local file as:
 *    NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
 * 
 * Done! Every quote request will instantly append to Google Sheets and email you!
 */

const RECIPIENT_EMAIL = "namma3dlab@gmail.com";
const LAB_NAME = "Namma 3D Lab";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    let data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter;
      }
    } else {
      data = e.parameter || {};
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Ensure header row exists on row 1
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Phone / WhatsApp",
        "Email",
        "Request Type",
        "File / Part Name",
        "Material",
        "Infill %",
        "Color",
        "Quantity",
        "Estimated Price (₹)",
        "Notes / Specifications",
        "Status"
      ]);
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, 13);
      headerRange.setBackground("#0A0D14");
      headerRange.setFontColor("#8DC63F");
      headerRange.setFontWeight("bold");
    }

    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const name = data.name || "Anonymous";
    const phone = data.phone || "Not Provided";
    const email = data.email || "Not Provided";
    const requestType = data.requestType || (data.fileName ? "File Upload" : "CAD Design Request");
    const fileName = data.fileName || data.partName || "N/A";
    const material = data.material || "PLA Standard";
    const infill = data.infill ? data.infill + "%" : "20%";
    const color = data.color || "Standard Black/White";
    const quantity = data.quantity || 1;
    const estimatedPrice = data.estimatedPrice || data.quoteRange || "Pending Review";
    const notes = data.notes || data.description || "None";
    const status = "New Lead";

    // Append row to sheet
    sheet.appendRow([
      timestamp,
      name,
      phone,
      email,
      requestType,
      fileName,
      material,
      infill,
      color,
      quantity,
      estimatedPrice,
      notes,
      status
    ]);

    // Send formatted HTML email alert to lab owner
    try {
      const subject = `🔥 New 3D Print Quote Request: ${name} (${material} • Qty: ${quantity})`;
      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden;">
          <div style="background: #0A0D14; padding: 20px; color: #FFFFFF;">
            <h2 style="margin: 0; color: #8DC63F; font-size: 20px;">${LAB_NAME} — New Lead Notification</h2>
            <p style="margin: 5px 0 0; font-size: 13px; color: #94A3B8;">Received: ${timestamp}</p>
          </div>
          
          <div style="padding: 24px; background: #FFFFFF; color: #334155;">
            <h3 style="border-bottom: 2px solid #8DC63F; padding-bottom: 6px; margin-top: 0; color: #0A0D14;">Customer Information</h3>
            <p style="margin: 6px 0;"><strong>👤 Name:</strong> ${name}</p>
            <p style="margin: 6px 0;"><strong>📱 Phone / WhatsApp:</strong> <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}">${phone}</a></p>
            <p style="margin: 6px 0;"><strong>✉️ Email:</strong> <a href="mailto:${email}">${email}</a></p>

            <h3 style="border-bottom: 2px solid #8DC63F; padding-bottom: 6px; margin-top: 20px; color: #0A0D14;">Project Specifications</h3>
            <p style="margin: 6px 0;"><strong>🛠️ Request Type:</strong> ${requestType}</p>
            <p style="margin: 6px 0;"><strong>📁 File / Part:</strong> ${fileName}</p>
            <p style="margin: 6px 0;"><strong>🧪 Material:</strong> ${material}</p>
            <p style="margin: 6px 0;"><strong>⚙️ Infill:</strong> ${infill}</p>
            <p style="margin: 6px 0;"><strong>🎨 Color:</strong> ${color}</p>
            <p style="margin: 6px 0;"><strong>🔢 Quantity:</strong> ${quantity}</p>
            <p style="margin: 6px 0;"><strong>💰 Estimated Price:</strong> <span style="font-size: 16px; font-weight: bold; color: #07875D;">${estimatedPrice}</span></p>

            <h3 style="border-bottom: 2px solid #8DC63F; padding-bottom: 6px; margin-top: 20px; color: #0A0D14;">Customer Notes</h3>
            <div style="background: #F8FAFC; padding: 12px; border-radius: 6px; border: 1px solid #E2E8F0; font-size: 14px;">
              ${notes.replace(/\n/g, '<br/>')}
            </div>

            <div style="margin-top: 24px; text-align: center;">
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(name)}%2C%20thank%20you%20for%20contacting%20${encodeURIComponent(LAB_NAME)}%20regarding%20your%203D%20print%20order!" 
                 style="background: #25D366; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; display: inline-block;">
                Reply on WhatsApp &rarr;
              </a>
            </div>
          </div>
          
          <div style="background: #F1F5F9; padding: 12px; text-align: center; font-size: 11px; color: #64748B;">
            Sent automatically by ${LAB_NAME} Website Lead Engine
          </div>
        </div>
      `;

      MailApp.sendEmail({
        to: RECIPIENT_EMAIL,
        subject: subject,
        htmlBody: htmlBody
      });
    } catch (mailErr) {
      Logger.log("Email sending error: " + mailErr.toString());
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Quote lead recorded and email sent." }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "online", lab: LAB_NAME, email: RECIPIENT_EMAIL }))
    .setMimeType(ContentService.MimeType.JSON);
}
