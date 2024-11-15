import React from 'react';
import Image from 'next/image';

// Place Data Arrays
const placeData = {
  europe: [
    { id: 1, title: 'Manon Les Suites', text: 'Copenhagen, Denmark', image: '/images/69.jpg' },
    { id: 2, title: 'The Dylan', text: 'Amsterdam, Netherlands', image: '/images/13.jpg' },
    { id: 3, title: 'OKU Ibiza', text: 'Ibiza, Spain', image: '/images/71.jpg' },
    { id: 4, title: 'Antiga Casa Buenavista', text: 'Barcelona, Spain', image: '/images/12.jpg' },
    { id: 5, title: 'The Ned London', text: 'London, UK', image: '/images/17.jpg' },
  ],
  oceania: [
    { id: 1, title: 'The Standard X', text: 'Melbourne, Australia', image: '/images/39.jpg' },
    { id: 2, title: 'Pramount House', text: 'Sydney, Australia', image: '/images/21.jpg' },
    { id: 3, title: 'Raes on Wategos', text: 'Byron Bay, NSW', image: '/images/18.jpg' },
    { id: 4, title: 'Little National Hotel', text: 'Canberra, Australia', image: '/images/10.jpg' },
    { id: 5, title: 'Alex Hotel', text: 'Perth, Australia', image: '/images/29.jpg' },
  ],
  asia: [
    { id: 1, title: 'R48 Hotel & Garden', text: 'Tel Aviv, Israel', image: '/images/66.jpg' },
    { id: 2, title: 'Rosewood Hotel', text: 'Hong Kong', image: '/images/84.jpg' },
    { id: 3, title: 'The Mustang Blu', text: 'Bangkok, Thailand', image: '/images/83.jpg' },
    { id: 4, title: 'Buahan', text: 'Ubud, Bali', image: '/images/86.jpg' },
    { id: 5, title: 'MUJI Hotel Ginza', text: 'Ginza, Tokyo', image: '/images/81.jpg' },
  ],
  americas: [
    { id: 1, title: 'Hotel Monville', text: 'Montreal, Canada', image: '/images/53.jpg' },
    { id: 2, title: 'L&apos;Ernitage', text: 'Beverly Hills, Los Angeles', image: '/images/46.jpg' },
    { id: 3, title: 'Korakia Pensione', text: 'Palm Springs, California', image: '/images/64.jpg' },
    { id: 4, title: 'The Woodlark', text: 'Portland, United States', image: '/images/68.jpg' },
    { id: 5, title: 'Be Tulum', text: 'Tulum, Mexico', image: '/images/42.jpg' },
  ],
};

const Destinations = ({ region }) => {
  const places = placeData[region]; // Dynamically get the places based on the region prop

  return (
    <>
      {/* Render places based on region */}
      <div>
        <div className="flex justify-between my-6">
          <h2 className="text-xl font-medium capitalize">{region}</h2>
          <Image
            src="/images/36.jpg"
            height={25}
            width={25}
            alt="right arrow"
          />
        </div>
      </div>
      <div>
        <ul className='gap-3 flex overflow-x-auto md:grid md:grid-cols-5'>
          {places.map((place) => (
            <li key={place.id} className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
              <div>
                <Image src={place.image} height={200} width={300} alt={place.title} />
              </div>
              <div className="px-2 py-2">
                <p className='font-extralight'>{place.text}</p>
                <h2 className='font-semibold'>{place.title}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Destinations;
