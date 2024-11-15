import Courasel from "@/components/Courasel";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import Destinations from "@/components/Destinations";

export default function Home() {
  const destinations = [
    { id: 1, name: "Lisbon", image: "/images/40.jpg" },
    { id: 2, name: "Paris", image: "/images/77.jpg" },
    { id: 3, name: "London", image: "/images/76.jpg" },
    { id: 4, name: "Barcelona", image: "/images/70.jpg" },
    { id: 5, name: "Copenhagen", image: "/images/56.jpg" },
    { id: 6, name: "Amsterdam", image: "/images/57.jpg" },
  ];

  return (
    <>
      <header>
        <div
          className="w-full h-[80vh] bg-cover bg-opacity-50"
          style={{ backgroundImage: `url('/images/4.jpg')` }}
        >
          {/* <div className="w-full h-full bg-black bg-opacity-50"> 
          </div> */}
        </div>
      </header>

      <main className="m-4 md:mx-5 lg:mx-20">
        {/* courasel images */}
        <section className="my-4">
          <div className="mb-16 mt-8 space-y-6">
            <h2 className="text-xl font-bold">Destination</h2>
            <Courasel data={destinations} />
          </div>
        </section>

        {/* info image */}
        <section className="my-4">
          <div className="bg-gray-100 md:flex md:space-x-10">
            <Image
              src="/images/24.jpg"
              height={400}
              width={800}
              alt="right arrow"
              className=" md:w-2/4 rounded-md"
            />
            <div className="mt-4 p-4 ">
              <h2 className="font-bold text-xl my-2">
                The Best Botique Hotels In Italy
              </h2>
              <p className="text-justify">
                We have curated the best Venice boutique hotels with exquisite
                design and comfort. You will find everything from luxury plazzo
                to hotels with scenic canal views.
              </p>
              <button className="bg-black text-white py-3 my-4 w-full rounded-lg md:w-32">
                Read more
              </button>
            </div>
          </div>
        </section>

        {/* grid place items */}
        <section className="my-14">
          <Destinations region="europe" />
          <Destinations region="americas" />
        </section>

        {/* info image 2 */}
        <section className="my-4">
          <div className="bg-gray-100 md:flex md:space-x-10">
            <Image
              src="/images/27.jpg"
              height={400}
              width={600}
              alt="right arrow"
              className="md:w-2/4 rounded-md"
            />
            <div className="mt-4 p-2">
              {/* flex flex-col justify-around items-left p-4 */}
              <h2 className="font-bold text-xl my-2">
                The Best Boutique Hotels In Spain
              </h2>
              <p className="text-justify">
                We have curated the best boutique hotels in Spain with top-notch
                design and tranquility. Discover everything from from luxury
                hotels in Ibiza to design hotels in Barcelona.
              </p>
              <button className="bg-black text-white w-full rounded-lg py-3 my-4 md:w-32">
                Read more
              </button>
            </div>
          </div>
        </section>

        {/* grid place items 2 */}
        <section className="my-14">
          <Destinations region="asia" />
          <Destinations region="oceania" />
        </section>

        {/* last info img */}
        <section className="my-10 bg-footerImg bg-repeat bg-cover mx-[-rem] md:mx-2">
          <div className="space-y-4 mx-8 min-h-[80vh] text-white flex flex-col items-start justify-center md:w-2/4">
            <h1 className="font-bold text-2xl">
              The Best Sustainable Boutique Hotels
            </h1>
            <p className="py-4">
              We have hand-curated a list of the 20 best sustainable boutique
              hotels across the world that actively promote sustainability while
              offering top-nothch design and comfort.
            </p>
            <button className="w-full bg-white text-black font-bold rounded-lg px-5 py-2 md:w-32">
              Read more
            </button>
          </div>
        </section>

        {/* accordion info */}
        <section className="hidden md:my-14 md:block">
          <Accordion />
        </section>
      </main>
    </>
  );
}
