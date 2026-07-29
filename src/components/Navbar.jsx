import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-0 w-full z-50">
      <header className="bg-blue-950/80 backdrop-blur-md text-white shadow-md">
        {/* Menggunakan container dan padding responsif agar tidak mepet ke tepi */}
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-5 flex items-center justify-between">
          
          <div className="font-bold text-2xl tracking-tighter">
            WEB <span className="font-light">CONTRACTOR</span>
          </div>
          
          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-blue-300 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-300 transition">About Us</Link>
            <Link to="/project" className="hover:text-blue-300 transition">Project</Link>
            <Link to="/blog" className="hover:text-blue-300 transition">Blog</Link>
            <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
          </nav>

          {/* Tombol Hamburger Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Menu Mobile (Muncul saat tombol diklik) */}
      {isOpen && (
        <nav className="md:hidden bg-blue-950/95 backdrop-blur-lg text-white flex flex-col px-6 py-4 space-y-3 shadow-lg border-t border-white/10">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 border-b border-white/10 hover:text-blue-300 transition">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 border-b border-white/10 hover:text-blue-300 transition">About Us</Link>
          <Link to="/project" onClick={() => setIsOpen(false)} className="block py-2 border-b border-white/10 hover:text-blue-300 transition">Project</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="block py-2 border-b border-white/10 hover:text-blue-300 transition">Blog</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 border-b border-white/10 hover:text-blue-300 transition">Contact</Link>
        </nav>
      )}
    </div>
  )
}