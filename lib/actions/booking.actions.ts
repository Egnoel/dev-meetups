"use server";
import connectDB from "../mongodb";
import { Booking } from "@/database";


export const createBooking = async({eventId, slug, email}: {eventId: string; slug: string; email: string}) => {
    try {
        await connectDB();
        await Booking.create({eventId, slug, email});
        return { success: true };
    } catch (error) {
        console.error("Error creating booking:", error);
        return { success: false};
    }
}