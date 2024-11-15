'use client'

import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { href: '/Hotels', label: 'Hotels' },
  { href: '/Search', label: 'Search' },
  { href: '/About', label: 'About' },
  { href: '/T&C', label: 'T&C' },
]

const Footer = () => {
  const [clickedLink, setClickedLink] = useState('')

  const under = (href) => {
    setClickedLink(href)
  }

  return (
    <footer className="my-4">
      <div className="mb-6">
        <ul className="flex space-x-6 justify-center">
          {navLinks.map((links) => (
            <li key={links.href} className="hover:underline">
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
        <p className="text-xs">Curated Botique Hotel Guides</p>
      </div>
    </footer>
  )
}

export default Footer