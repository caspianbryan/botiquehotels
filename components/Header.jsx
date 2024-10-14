import Nav from "./Nav"
import Image from "next/image";

const nav = [
  { href: "/Europe", label: "Europe", },
  { href: "/Asia", label: "Asia", },
  { href: "/Americas", label: "Americas", },
  { href: "/Oceania", label: "Oceania", },
  { href: "/Themes", label: "Themes", },
  { href: "/Journal", label: "Journal", },
];


const Header = () => {
  return (
    <header className="">
      {/* <div className="bg-bannerImg bg-repeat bg-cover my-2 mx-[-1rem] md:mx-[-6rem]">
        <div className="text-center text-white flex flex-col items-center justify-center min-h-[80vh] mx-8">
          <h1 className="my-3">Discover the best design boutique hotels around the world</h1>
          <p>from small hotels to luxury modern hotel</p>
        </div>
      </div> */}
      <div className="">
        <div>
          
        </div>
      </div>
    </header>
  )
}

export default Header