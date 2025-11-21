import  Event  from "@/database/event.model";
import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest){
    try {
        await connectDB();
        const formData = await req.formData();
        let event;

        try {
            event = Object.fromEntries(formData.entries());
        } catch (error) {
            return NextResponse.json({message:"Invalid form data"}, {status: 400});
        }

        const eventCreated = await Event.create(event);
        return NextResponse.json({message:"Event created successfully", event: eventCreated}, {status: 201});
    } catch (e) {
        console.error(e);
        return NextResponse.json({message:"Event creation failed", error: e instanceof Error ? e.message : "Unknown error"}, {status: 500});
    }
}