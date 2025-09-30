import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.string().min(10),
  area: z.string().min(1),
  pestType: z.string().min(1),
  message: z.string().min(10).max(500),
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form data
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      area: formData.get('area') as string,
      pestType: formData.get('pestType') as string,
      message: formData.get('message') as string,
    };
    
    const file = formData.get('file') as File;

    // Validate data
    const validatedData = contactSchema.parse(data);

    // Log the lead (in production, save to database)
    console.log('New lead received:', {
      ...validatedData,
      hasFile: !!file,
      fileName: file?.name,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
    });

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send SMS notification
    // 4. Integrate with CRM
    
    // Placeholder for email sending
    await sendEmailNotification(validatedData, file);
    
    // Placeholder for SMS notification
    await sendSMSNotification(validatedData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        leadId: generateLeadId()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation error',
          errors: error.errors 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

// Placeholder function for email notification
async function sendEmailNotification(data: any, file?: File) {
  // In production, integrate with email service like:
  // - SendGrid
  // - AWS SES
  // - Resend
  // - Nodemailer
  
  console.log('Email notification would be sent:', {
    to: 'info@pestjeddah.com',
    subject: `New pest control inquiry from ${data.name}`,
    content: `
      Name: ${data.name}
      Phone: ${data.phone}
      Area: ${data.area}
      Pest Type: ${data.pestType}
      Message: ${data.message}
      Has File: ${!!file}
    `
  });
}

// Placeholder function for SMS notification
async function sendSMSNotification(data: any) {
  // In production, integrate with SMS service like:
  // - Twilio
  // - AWS SNS
  // - Local SMS gateway
  
  console.log('SMS notification would be sent:', {
    to: '+966-XX-XXX-XXXX', // Admin phone number
    message: `New lead: ${data.name} from ${data.area} - ${data.pestType}`
  });
}

// Generate unique lead ID
function generateLeadId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2, 5);
  return `LEAD-${timestamp}-${random}`.toUpperCase();
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}



