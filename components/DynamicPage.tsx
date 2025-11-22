import { IEvent } from '@/database';
import { cacheLife } from 'next/cache';
import EventCard from '@/components/EventCard';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const DynamicPage = async () => {
  'use cache';
  cacheLife('hours');
  const url = `${
    BASE_URL?.startsWith('http') ? BASE_URL : `https://${BASE_URL}`
  }/api/events`;
  const response = await fetch(url);
  const { events } = await response.json();
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
