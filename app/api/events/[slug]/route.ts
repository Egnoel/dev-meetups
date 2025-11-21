import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Event } from '@/database';

interface RouteParams {
  params: {
    slug: string;
  };
}

/**
 * GET /api/events/[slug]
 * Fetches a single event by its slug
 */
export async function GET(
  request: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  try {
    // Extract and validate slug parameter
    const { slug } = await params;

    if (!slug || typeof slug !== 'string' || slug.trim() === '') {
      return NextResponse.json(
        { message: 'Slug parameter is required' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    const sanitazedSlug = slug.trim().toLowerCase();

    // Query event by slug
    const event = await Event.findOne({ slug: sanitazedSlug }).lean();

    // Handle event not found
    if (!event) {
      return NextResponse.json(
        { message: 'Event not found' },
        { status: 404 }
      );
    }

    // Return event data
    return NextResponse.json(
      { message: 'Event fetched successfully', event },
      { status: 200 }
    );
  } catch (error) {
    // Log error for debugging (use proper logging service in production)
    console.error('Error fetching event:', error);

    // Handle validation errors from Mongoose
    if (error instanceof Error && error.name === 'ValidationError') {
      return NextResponse.json(
        { message: 'Invalid request parameters' },
        { status: 400 }
      );
    }

    // Handle unexpected errors
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
