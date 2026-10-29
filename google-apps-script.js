/**
 * ============================================================================
 * NAMMA 3D LAB — GOOGLE APPS SCRIPT FOR CUSTOM ENQUIRIES & LEADS
 * ============================================================================
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets (https://sheets.google.com) and create a new sheet.
 * 2. In the menu, go to: Extensions > Apps Script.
 * 3. Replace all code in Code.gs with this entire script.
 * 4. Click "Deploy" (top right) > "New deployment".
 * 5. Select type: "Web app".
 * 6. Configuration:
 *    - Description: "Namma 3D Lab Customization Webhook"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 7. Click "Deploy", approve permissions, and copy the Web App URL.
 * 8. Add that URL to your .env.local file:
 *    NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
 * 
 * Done! Every enquiry from /custom automatically logs a row and emails you!
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

    // Auto-create clean headers if row 1 is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Customer Name",
        "WhatsApp Number",
        "Email",
        "Product Name",
        "Product Reference",
        "Selected Variants",
        "Quantity",
        "Customization Instructions",
        "Enquiry Source",
        "Status"
      ]);
      const headerRange = sheet.getRange(1, 1, 1, 11);
      headerRange.setBackground("#0A0D14");
      headerRange.setFontColor("#8DC63F");
      headerRange.setFontWeight("bold");
    }

    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const name = data.name || "Customer";
    const phone = data.phone || "Not Provided";
    const email = data.email || "Not Provided";
    const productName = data.productName || "General Customization";
    const productReference = data.productReference || "GEN-CUSTOM";
    const variants = data.variants || "Standard";
    const quantity = data.quantity || 1;
    const instructions = data.instructions || "None";
    const source = data.source || "General Customization";
    const status = data.status || "New";

    // Append enquiry row
    sheet.appendRow([
      timestamp,
      name,
      phone,
      email,
      productName,
      productReference,
      variants,
      quantity,
      instructions,
      source,
      status
    ]);

    // Send instant HTML notification email to lab team
    try {
      const subject = `✨ New Custom Enquiry: ${name} (${productName} • Qty: ${quantity})`;
      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden;">
          <div style="background: #0A0D14; padding: 20px; color: #FFFFFF;">
            <h2 style="margin: 0; color: #8DC63F; font-size: 18px;">${LAB_NAME} — Customization Enquiry</h2>
            <p style="margin: 5px 0 0; font-size: 12px; color: #94A3B8;">Source: ${source} &bull; ${timestamp}</p>
          </div>
          
          <div style="padding: 24px; background: #FFFFFF; color: #334155;">
            <h3 style="border-bottom: 2px solid #8DC63F; padding-bottom: 6px; margin-top: 0; color: #0A0D14; font-size: 14px;">Customer Details</h3>
            <p style="margin: 6px 0;"><strong>👤 Name:</strong> ${name}</p>
            <p style="margin: 6px 0;"><strong>📱 WhatsApp:</strong> <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}">${phone}</a></p>
            <p style="margin: 6px 0;"><strong>✉️ Email:</strong> <a href="mailto:${email}">${email}</a></p>

            <h3 style="border-bottom: 2px solid #8DC63F; padding-bottom: 6px; margin-top: 20px; color: #0A0D14; font-size: 14px;">Product &amp; Customization Specs</h3>
            <p style="margin: 6px 0;"><strong>📦 Product:</strong> ${productName} (Ref: ${productReference})</p>
            <p style="margin: 6px 0;"><strong>🎨 Variants / Preferences:</strong> ${variants}</p>
            <p style="margin: 6px 0;"><strong>🔢 Requested Quantity:</strong> ${quantity}</p>

            <h3 style="border-bottom: 2px solid #8DC63F; padding-bottom: 6px; margin-top: 20px; color: #0A0D14; font-size: 14px;">Customer Instructions</h3>
            <div style="background: #F8FAFC; padding: 12px; border-radius: 6px; border: 1px solid #E2E8F0; font-size: 13px;">
              ${instructions.replace(/\n/g, '<br/>')}
            </div>

            <div style="margin-top: 24px; text-align: center;">
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(name)}%2C%20thank%20you%20for%20your%20customization%20enquiry%20regarding%20${encodeURIComponent(productName)}!" 
                 style="background: #25D366; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; display: inline-block;">
                Reply on WhatsApp &rarr;
              </a>
            </div>
          </div>
        </div>
      `;

      MailApp.sendEmail({
        to: RECIPIENT_EMAIL,
        subject: subject,
        htmlBody: htmlBody
      });
    } catch (mailErr) {
      Logger.log("Email notification error: " + mailErr.toString());
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Custom enquiry logged to Google Sheet." }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
