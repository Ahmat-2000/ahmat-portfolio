import { NextResponse } from 'next/server';
import { transport, mailOptions, EnglishMail } from '@/lib/nodeMailer';

export async function POST(request) {
  const { email, name, message } = await request.json();
  if(!name || !email || !message){
    return NextResponse.json({message: "Complete the form correctly"},{status: 404});
  }

  try {
    await transport.sendMail(mailOptions({name, email, message}));
    await transport.sendMail(EnglishMail({name, email}));
    return NextResponse.json({message : "Your mail has been sent successfully"},{status: 200});
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err.message}, { status: 500 });
  }
}