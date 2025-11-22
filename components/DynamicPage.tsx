import { IEvent } from '@/database';
import { cacheLife } from 'next/cache';
import EventCard from '@/components/EventCard';
import { events } from '@/lib/constants';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const DynamicPage = async () => {
  'use cache';
  cacheLife('hours');
  //  const response = await fetch(`${BASE_URL}/api/events`);
  //  const { events } = await response.json();
  return (
    <ul className="events">
      {events &&
        events.length > 0 &&
        events.map((event: IEvent) => (
          <li key={event.slug}>
            <EventCard {...event} />
          </li>
        ))}
    </ul>
  );
};

export default DynamicPage;
