import { NextResponse } from "next/server";

export async function POST(request) {
    const data = await request.json();
    console.log("Received Data:", data);
    return NextResponse.json({ success: true, message: "Data received", receivedData: data });
}
