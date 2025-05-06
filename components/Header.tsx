// 'use client'

// import { usePathname } from 'next/navigation'
// import React from 'react'
// import Link from 'next/link'

// const Header = () => {
//     const pathname = usePathname()
//   return (
//     <header className='my-10 flex justify-center gap-5 text-black'>
//             <Link href='/'>
//                 HOME
//             </Link>
            
//             <ul className='flex flex-row items-center gap-8 mx-3'>
//                 <li className={pathname === '/about' ? 'text-blue-500' : ''}>
//                     <Link href='/about'>ABOUT</Link>
//                 </li>
//                 <li className={pathname === '/contact' ? 'text-blue-500' : ''}>
//                     <Link href='/contact'>CONTACT</Link>
//                 </li> 

//             </ul>
//             <Link href='/sign-in'>
//                 SIGN IN
//             </Link>
//         </header>
//   )
// }

// export default Header

"use client"

import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Link from 'next/link'

export default function Header() {
  return (
    <nav className="bg-[#112920] text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-md" />
      </div>

      {/* Menu */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-green-400 transition">Home</Link>
        <Link href="/pemesanan" className="hover:text-green-400 transition">Pemesanan</Link>
        <Link href="/kendaraan" className="hover:text-green-400 transition">Kendaraan</Link>
        <Link href="/lokasi" className="hover:text-green-400 transition">Lokasi</Link>
        <Link href="/testimoni" className="hover:text-green-400 transition">Testimoni</Link>
        <Link href="/tentang-kami" className="hover:text-green-400 transition">Tentang Kami</Link>
      </div>

      {/* Search */}
      <div className="relative">
        <Input
          type="text"
          placeholder="Search..."
          className="rounded-full pl-4 pr-10 bg-white text-black placeholder-gray-500 w-56"
        />
        <Button
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
        >
          <Search className="w-4 h-4" />
        </Button>
      </div>
    </nav>
  )
}
