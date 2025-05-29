import { NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import { MyDocument } from '@/components/content/MyDocument';

export async function GET() {
  try {
    const stream = await renderToStream(<MyDocument />);
    
    // Convert stream to buffer
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="document.pdf"',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
} 