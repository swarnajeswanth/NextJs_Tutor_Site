import { NextRequest, NextResponse } from "next/server";

// In-memory store (resets on server restart)
const leads: Record<string, unknown>[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Basic server-side validation
    const { name, email, company, interest } = body;
    if (!name || !email || !company || !interest) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, company, interest" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Save lead with timestamp
    const lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      ...body,
      submittedAt: new Date().toISOString(),
    };

    leads.push(lead);

    console.log(`New lead captured: ${name} from ${company} — ${interest}`);

    return NextResponse.json(
      { success: true, message: "Thank you! We'll be in touch within 24 hours.", id: lead.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Optional: GET endpoint to retrieve all leads (admin use — protect in production)
export async function GET() {
  return NextResponse.json({ count: leads.length, leads });
}
