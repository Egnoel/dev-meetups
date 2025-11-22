import { IEvent } from '@/database';
import { getSimilarEventsBySlug } from '@/lib/actions/event.actions';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import EventDetailItem from './EventDetailItem';
import EventAgenda from './EventAgenda';
import EventTags from './EventTags';
import BookEvent from './BookEvent';
import EventCard from './EventCard';
import { cacheLife } from 'next/cache';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const EventDetails = async ({ params }: { params: Promise<string> }) => {
  'use cache';
  cacheLife('hours');
  const slug = await params;
  let event;
  try {
    const url = `${
      BASE_URL?.startsWith('http') ? BASE_URL : `https://${BASE_URL}`
    }/api/events/${slug}`;
    const request = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!request.ok) {
      if (request.status === 404) {
        return notFound();
      }
      throw new Error(`Failed to fetch event: ${request.statusText}`);
    }

    const response = await request.json();
    event = response.event;

    if (!event) {
      return notFound();
    }
  } catch (error) {
    console.error('Error fetching event:', error);
    return notFound();
  }

  const bookings = 10;

  const similarEvents: IEvent[] = await getSimilarEventsBySlug(event.slug);

  return (
    <section id="event">
      <div className="header">
        <h1>{event.title}</h1>
        <p>{event.description}</p>
      </div>
      <div className="details">
        {/*Left Side - Content */}
        <div className="content">
          <Image
            src={event.image}
            alt={event.title}
            width={800}
            height={800}
            className="banner"
          />
          <section className="flex-col-gap-2">
            <h2>Overview</h2>
            <p>{event.overview}</p>
          </section>
          <section className="flex-col-gap-2">
            <h2>Event Details</h2>
            <EventDetailItem
              icon="/icons/calendar.svg"
              alt="calendar"
              label={event.date}
            />
            <EventDetailItem
              icon="/icons/clock.svg"
              alt="clock"
              label={event.time}
            />
            <EventDetailItem
              icon="/icons/pin.svg"
              alt="Location"
              label={event.location}
            />
            <EventDetailItem
              icon="/icons/mode.svg"
              alt="Mode"
              label={event.mode}
            />
            <EventDetailItem
              icon="/icons/audience.svg"
              alt="Audience"
              label={event.audience}
            />
          </section>
          <EventAgenda AgendaItems={event.agenda} />
          <section className="flex-col-gap-2">
            <h2>About the Organizer</h2>
            <p>{event.organizer}</p>
          </section>
          <EventTags tags={event.tags} />
        </div>
        {/*Right Side - Booking form */}
        <aside className="booking">
          <div className="signup-card">
            <h2>Book your spot</h2>
            {bookings > 0 ? (
              <p className="text-sm">
                Join {bookings} people who already booked their spot!
              </p>
            ) : (
              <p className="text-sm">Be the first to book your spot!</p>
            )}
            <BookEvent eventId={event._id} slug={event.slug} />
          </div>
        </aside>
      </div>
      <div className="flex w-full flex-col gap-4 pt-20">
        <h2>Similar Events</h2>
        <div className="events">
          {similarEvents && similarEvents.length > 0 ? (
            similarEvents.map((simEvent: IEvent) => (
              <EventCard key={simEvent.slug} {...simEvent} />
            ))
          ) : (
            <p>No similar events found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
