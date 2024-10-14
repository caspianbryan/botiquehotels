'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { id: 1, href: '/Europe', label: 'Europe' },
  { id: 2, href: '/Asia', label: 'Asia' },
  { id: 3, href: '/Americas', label: 'Americas' },
  { id: 4, href: '/Oceania', label: 'Oceania' },
  { id: 5, href: '/Themes', label: 'Themes' },
  { id: 6, href: '/Journal', label: 'Journal' },
]

const Nav = () => {

  const [isPopup, setIsPopup] = useState(false)

  const togglePlaces = () => {
    setIsPopup(!isPopup)
  }

  return (
    <nav className="m-4 md:mx-5 lg:mx-20">
      <div className="flex justify-between">
        <Image
          src='/images/32.jpg'
          width={25}
          height={25}
          alt="Nav elements"
          onClick={togglePlaces}
        />
        <Link href='/'><h1>Boutique Hotels</h1></Link>
        <Image
          src='/images/22.jpg'
          width={25}
          height={25}
          alt="Instagram"
        />
      </div>
      <div className="">
        <ul className="hidden md:flex items-center justify-center space-x-10 p-2">
          {/* flex items-center justify-center space-x-10 p-2 */}
          {navLinks.map((nav) => (
            <Link href={nav.href} key={nav.id}>
              <li key={nav.id} className="sm:hide md:flex hover:underline">
                {nav.label}
                <Image
                  src='/images/31.jpg'
                  height={20}
                  width={25}
                  alt="icon"
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {isPopup && (
        // <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        //   <div className="bg-white p-6 rounded-lg shadow-lg">
        //     <button
        //       onClick={togglePlaces}
        //       className="absolute top-2 right-2 text-gray-600 font-bold"
        //     >
        //       x
        //     </button>
        //     <ul className="space-y-4">
        //       {navLinks.map((link) => (
        //         <li key={link.href}>
        //           <Link 
        //             href={link.href}
        //             onClick={togglePlaces}
        //             className="text-blue-500 hover:underline"
        //           >
        //             {link.label}
        //           </Link>
        //         </li>
        //       ))}
        //     </ul>
        //   </div>
        // </div>

        <div className="fixed inset-0 bg-black bg-opacity-50 flex">
          <div className="bg-white w-full md:w-1/3 h-full transform transition-transform duration-1000 
            ease-in-out translate-x-0"
            style={{ transform: isPopup ? `translateX(0)` : `translateX(-100%)` }}
          >
            <button
              onClick={togglePlaces}
              className="absolute top-4 right-4 text-green-600 font-bold"
            >
              <Image
                src='/images/close.jpg'
                width={25}
                height={25}
                alt="Instagram"
              />
            </button>
            <ul className="space-y-4 p-6 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={togglePlaces}
                    className="hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav