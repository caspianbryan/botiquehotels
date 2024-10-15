import React from "react";
import Courasel from "@/components/Courasel";

const page = () => {
  const destinations = [];

  return (
    <>
      {/* courasel images */}
      <section className="my-4">
        <div className="mb-16 mt-8 space-y-6">
          <h2>Destination</h2>
          {/* <Courasel data={destinations} /> */}
        </div>
      </section>
    </>
  );
};

export default page;
