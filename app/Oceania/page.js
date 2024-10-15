import Courasel from "@/components/Courasel";
import React from "react";

const page = () => {
  const destinations = [
    { id: 1, name: "Sydney", image: "/images/lis1.jpg" },
    { id: 2, name: "Melbourne", image: "/images/eu3.jpg" },
    { id: 3, name: "Brisbane", image: "/images/lon1.jpg" },
    { id: 4, name: "Perth", image: "/images/lis2.jpg" },
    { id: 5, name: "Canberra", image: "/images/lon2.jpg" },
    { id: 6, name: "Hobart", image: "/images/lon3.jpg" },
  ];

  const Countries = [
    { id: 1, name: "Australia", image: "/images/64.jpg" },
    { id: 2, name: "New Zealand", image: "/images/62.jpg" },
  ];

  return (
    <>
      {/* heading */}
      <section
        className="w-full h-[60vh] bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url('/images/83.jpg')` }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-center text-2xl font-semibold text-white">
            Ocenia
          </h1>
        </div>
      </section>

      <main className="m-4 md:mx-6 lg:mx-20">
        {/* courasel for destinations */}
        <section className="my-10">
          <h2 className="mb-4">Popular</h2>
          <Courasel data={destinations} />
        </section>

        {/* courasel images */}
        <section className="my-6">
          <div className="py-2">
            <h2>Countries</h2>
            {/* Card elements */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {Countries.map((coun) => (
                <div
                  key={coun.id}
                  className="relative h-64 flex justify-center items-center bg-cover bg-center"
                  style={{ backgroundImage: `url(${coun.image})` }}
                >
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  {/* Text on top of the dark overlay */}
                  <h2 className="relative z-10 text-white text-xl">
                    {coun.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
