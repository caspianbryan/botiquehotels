import Courasel from "@/components/Courasel";
import Image from "next/image";
import Accordion from "@/components/Accordion";

export default function Home() {
  return (
    <>
      <header>
        <div
          className="w-full h-[80vh] bg-cover"
          style={{ backgroundImage: `url('/images/4.jpg')` }}
        >
          {/* bg-bannerImg bg-repeat bg-cover */}
        </div>
      </header>

      <main className="m-4 md:mx-5 lg:mx-20">
        {/* courasel images */}
        <section className="my-4">
          <div className="mb-16 mt-8 space-y-6">
            <h2>Destination</h2>
            <Courasel />
          </div>
        </section>

        {/* info image */}
        <section className="my-4">
          <div className="space-y-4 md:flex md:space-x-16 bg-gray-100 px-6 md:p-0 p-2">
            <Image
              src="/images/24.jpg"
              height={400}
              width={800}
              alt="right arrow"
              className=" md:w-2/4 rounded-md"
            />
            <div className="flex flex-col justify-around items-left p-4">
              <h2 className="">The Best Botique Hotels In Venice</h2>
              <p className="text-justify">
                We have curated the best Venice boutique hotels with exquisite
                design and comfort. You will find everything from luxury plazzo
                to hotels with scenic canal views.
              </p>
              <button className="bg-black text-white w-full  rounded-lg py-3 my-4 md:w-32">
                read more
              </button>
            </div>
          </div>
        </section>

        {/* grid place items */}
        <section className="my-14">
          {/* Europe places */}
          <div className="">
            <div className="flex justify-between mb-2">
              <h2 className="text-xl">Europe</h2>
              <Image
                src="/images/36.jpg"
                height={25}
                width={25}
                alt="right arrow"
              />
            </div>
            {/* container for card */}
            <div className="gap-3 flex overflow-x-auto md:grid md:grid-cols-5 ">
              {/* card 1 */}
              <div className=" bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/69.jpg"
                  height={200}
                  width={300}
                  alt="right arrow"
                />
                <div className="px-2 py-2">
                  <p>Copenhegen, Denmark</p>
                  <h2>Manon Les Suites</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/13.jpg"
                  height={200}
                  width={300}
                  alt="right arrow"
                />
                <div className="px-2 py-6">
                  <p>Copenhegen, Denmark</p>
                  <h2>Manon Les Suites</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/71.jpg"
                  height={200}
                  width={300}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Copenhegen, Denmark</p>
                  <h2>Manon Les Suites</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/74.jpg"
                  height={200}
                  width={300}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Copenhegen, Denmark</p>
                  <h2>Manon Les Suites</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/17.jpg"
                  height={200}
                  width={300}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Copenhegen, Denmark</p>
                  <h2>Manon Les Suites</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Americas places */}
          <div className="mt-8">
            <div className="flex justify-between mb-2">
              <h2>Americas</h2>
              <Image
                src="/images/36.jpg"
                height={25}
                width={25}
                alt="right arrow"
              />
            </div>
            <div className="gap-3 flex overflow-x-auto md:grid md:grid-cols-5">
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/7.jpg"
                  height={150}
                  width={300}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Montreal, Canada</p>
                  <h2>Hotel Monville</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/21.jpg"
                  height={200}
                  width={300}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Montreal, Canada</p>
                  <h2>Hotel Monville</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/18.jpg"
                  height={200}
                  width={300}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Montreal, Canada</p>
                  <h2>Hotel Monville</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/10.jpg"
                  height={200}
                  width={300}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Montreal, Canada</p>
                  <h2>Hotel Monville</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/29.jpg"
                  height={200}
                  width={300}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Montreal, Canada</p>
                  <h2>Hotel Monville</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* info image 2 */}
        <section className="my-4">
          <div className="space-y-4 md:flex md:space-x-16 bg-gray-100 px-6 p-2">
            <Image
              src="/images/27.jpg"
              height={400}
              width={600}
              alt="right arrow"
              className="md:w-2/4 rounded-md"
            />
            <div className="flex flex-col justify-around items-left p-4">
              <h2 className="">The Best Boutique Hotels In Spain</h2>
              <p className="text-justify">
                We have curated the best boutique hotels in Spain with top-notch
                design and tranquility. Discover everything from from luxury
                hotels in Ibiza to design hotels in Barcelona.
              </p>
              <button className="bg-black text-white w-full rounded-lg py-3 my-4 md:w-32">
                read more
              </button>
            </div>
          </div>
        </section>

        {/* grid place items 2 */}
        <section className="my-14">
          <div>
            {/* oceania  */}
            <div className="flex justify-between mb-2">
              <h2>Oceania</h2>
              <Image
                src="/images/36.jpg"
                height={25}
                width={25}
                alt="right arrow"
              />
            </div>
            <div className="gap-3 flex overflow-x-auto md:grid md:grid-cols-5">
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/55.jpg"
                  height={200}
                  width={300}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Sydney, Australia</p>
                  <h2>Paramount House</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/56.jpg"
                  height={200}
                  width={300}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Sydney, Australia</p>
                  <h2>Paramount House</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/64.jpg"
                  height={200}
                  width={300}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Sydney, Australia</p>
                  <h2>Paramount House</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/68.jpg"
                  height={200}
                  width={300}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Sydney, Australia</p>
                  <h2>Paramount House</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/42.jpg"
                  height={200}
                  width={300}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Sydney, Australia</p>
                  <h2>Paramount House</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Asia */}
          <div className="mt-8">
            <div className="flex justify-between mb-2">
              <h2>Asia</h2>
              <Image
                src="/images/36.jpg"
                height={25}
                width={25}
                alt="right arrow"
              />
            </div>
            <div className="gap-3 flex overflow-x-auto md:grid md:grid-cols-5">
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/66.jpg"
                  height={300}
                  width={400}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Tel Aviv, Israel</p>
                  <h2>R48 Hotel & Garden</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/84.jpg"
                  height={300}
                  width={400}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Tel Aviv, Israel</p>
                  <h2>R48 Hotel & Garden</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/83.jpg"
                  height={300}
                  width={400}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Tel Aviv, Israel</p>
                  <h2>R48 Hotel & Garden</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/86.jpg"
                  height={300}
                  width={400}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Tel Aviv, Israel</p>
                  <h2>R48 Hotel & Garden</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md flex-shrink-0 max-w-60 md:w-auto">
                <Image
                  src="/images/87.jpg"
                  height={300}
                  width={400}
                  alt="right arrow"
                />
                <div className="p-2">
                  <p>Tel Aviv, Israel</p>
                  <h2>R48 Hotel & Garden</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* last info img */}
        <section className="my-6 bg-footerImg bg-repeat bg-cover mx-[-1rem] md:mx-2">
          <div className="space-y-8 mx-8 min-h-[80vh] text-white flex flex-col items-start justify-center">
            <h1 className="font-bold my-4">
              The Best Sustainable Boutique Hotels
            </h1>
            <p className="py-4">
              We have hand-curated a list of the 20 best sustainable boutique
              hotels across the world that actively promote sustainability while
              offering top-nothch design and comfort.
            </p>
            <button className="bg-white text-black rounded-lg px-5 py-2 outline outline-1">
              read more
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
