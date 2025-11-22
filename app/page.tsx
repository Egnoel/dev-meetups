import DynamicPage from '@/components/DynamicPage';

import ExploreBtn from '@/components/ExploreBtn';

import { Suspense } from 'react';




const page = async () => {
  

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
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicPage />
        </Suspense>
      </div>
    </section>
  );
};

export default page;
