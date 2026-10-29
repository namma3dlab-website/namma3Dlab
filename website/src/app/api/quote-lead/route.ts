import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Log the lead on the server console for immediate audit
    console.log('[QUOTE_LEAD_RECEIVED]', {
      timestamp: new Date().toISOString(),
      name: body.name,
      phone: body.phone,
      email: body.email,
      material: body.material,
      quantity: body.quantity,
      estimatedPrice: body.estimatedPrice,
    });

    const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (googleScriptUrl) {
      try {
        const response = await fetch(googleScriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const resData = await response.json().catch(() => ({ status: 'forwarded' }));
        return NextResponse.json({ success: true, googleSheets: true, data: resData });
      } catch (externalErr) {
        console.warn('[GOOGLE_APPS_SCRIPT_FORWARD_WARNING]', externalErr);
        // Return success so the user can continue smoothly to WhatsApp
        return NextResponse.json({ success: true, googleSheets: false, note: 'Lead captured locally' });
      }
    }

    // If Google Script URL is not set yet in env, acknowledge local capture
    return NextResponse.json({
      success: true,
      googleSheets: false,
      message: 'Lead received and ready for WhatsApp handshake. (Configure NEXT_PUBLIC_GOOGLE_SCRIPT_URL for automated Google Sheet sync)'
    });
  } catch (err: any) {
    console.error('[QUOTE_LEAD_ERROR]', err);
    return NextResponse.json({ success: false, error: err.message || 'Internal error' }, { status: 500 });
  }
}
