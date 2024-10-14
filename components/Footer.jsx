'use client'

import Link from "next/link"
import { useState } from "react"

const navLinks = [
  {
    href: '/Europe',
    label: 'Europe'
  },
  {
    href: '/Asia',
    label: 'Asia'
  },
  {
    href: '/Americas',
    label: 'Americas'
  },
  {
    href: '/Search',
    label: 'Search'
  },
  {
    href: '/About',
    label: 'About'
  },
]

const Footer = () => {
  const [clickedLink, setClickedLink] = useState('')

  const under = (href) => {
    setClickedLink(href)
  }

  return (
    <footer className="my-4">
      <div className="mb-6">
        <ul className="flex space-x-4 justify-center">
          {navLinks.map((links) => (
            <li key={links.href}>
              <Link
                href={links.href}
                onClick={() => under(links.href)}
                className={clickedLink === links.href ? 'underline' : ''}
              >
                {links.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center my-2 space-y-2">
        <Link href='/'><h2>Boutique Hotels</h2></Link>
        <p>Curated Botique Hotel Guides</p>
      </div>
    </footer>
  )
}

export default Footer