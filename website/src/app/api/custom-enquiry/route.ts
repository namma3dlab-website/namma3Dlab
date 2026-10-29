import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email = '',
      productName = 'General Customization',
      productReference = 'GEN-CUSTOM',
      variants = 'Standard',
      quantity = 1,
      instructions = 'None',
      source = 'General Customization'
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and WhatsApp phone number are required.' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    // Standard lead payload for Google Sheets & Email
    const leadRecord = {
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
      status: 'New'
    };

    console.log('[CUSTOM_ENQUIRY_LOGGED]', leadRecord);

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_WEBHOOK_URL || process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    let googleSheetsSynced = false;
    let syncError: string | null = null;

    if (googleScriptUrl) {
      try {
        const response = await fetch(googleScriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadRecord),
        });

        if (response.ok) {
          googleSheetsSynced = true;
        } else {
          syncError = `Google Apps Script returned status ${response.status}`;
        }
      } catch (externalErr: any) {
        console.warn('[GOOGLE_SHEETS_SYNC_WARNING]', externalErr);
        syncError = externalErr.message || 'Network error reaching Google Script';
      }
    }

    return NextResponse.json({
      success: true,
      googleSheetsSynced,
      syncError,
      lead: leadRecord,
      message: googleSheetsSynced
        ? 'Enquiry recorded in Google Sheets and email sent.'
        : 'Enquiry recorded locally. Ready for WhatsApp conversation.'
    });
  } catch (error: any) {
    console.error('[CUSTOM_ENQUIRY_SERVER_ERROR]', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
