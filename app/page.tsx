import EventCard from '@/components/EventCard';
import ExploreBtn from '@/components/ExploreBtn';
import { events } from '@/lib/constants';

const page = () => {
  return (
    <section>
      <h1 className="text-center">
        The hub for every Dev <br /> Event You can&apos;t miss
      </h1>
      <p className="text-center mt-5">
        Hackathos, Meetups, Conferences. All in one place.
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.slug}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
