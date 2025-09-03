"use client"
import { useState } from "react";
import Link from "next/link"
import Image from "next/image";
import { IoReorderThreeOutline } from "react-icons/io5";
export function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <header className="bg-gray-600 sticky top-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 h-14 shadow-md w-full max-w-[90vw] mx-auto rounded-md">
            <h1 className="flex items-center">
                <Link href="#Home" className="hover:text-teal-400 transition">
                    <Image src="/icon.png" alt="Icon" width={48} height={48}  className="max-h-14 w-auto object-contain" />
                </Link>
            </h1>
            <nav className="hidden md:flex gap-6 text-white font-medium">
                <Link href="#About" className="hover:text-teal-400 transition">About</Link>
                 <Link href="#Skills" className="hover:text-teal-400 transition">Skills</Link>
                <Link href="#Projects" className="hover:text-teal-400 transition">Projects</Link>
                <Link href="#Testimonies" className="hover:text-teal-400 transition">Testimonies</Link>
                <Link href="#Contact" className="hover:text-teal-400 transition">Contact</Link>
            </nav>
            <button className="md:hidden text-white text-3xl" onClick={()=> setIsOpen(!isOpen)}>  
                <IoReorderThreeOutline />
            </button>
            {
              isOpen && (
                <nav className="absolute top-14 left-0 w-full max-w-[90vw] mx-auto bg-gray-700 flex flex-col gap-4 p-6 text-white font-medium md:hidden shadow-lg rounded-md">
                    <Link href="#About" className="hover:text-teal-400 transition" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="#Projects" className="hover:text-teal-400 transition" onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link href="#Skills" className="hover:text-teal-400 transition" onClick={() => setIsOpen(false)}>Skills</Link>
                    <Link href="#Testimonies" className="hover:text-teal-400 transition" onClick={() => setIsOpen(false)}>Testimonies</Link>
                    <Link href="#Contact" className="hover:text-teal-400 transition" onClick={() => setIsOpen(false)}>Contact</Link>
                </nav>
            )}
        </header>
    )
}

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 p-4 text-center w-screen" >
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Emmanuel Akanmu. All Rights Reserved.</p>
      </div>
    </footer>
  );
};