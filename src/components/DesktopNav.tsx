import { useState } from 'react'
import { Search, ShoppingBag } from 'lucide-react'
import { SearchDropdown } from './search'

export function DesktopNav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const NAV_LINKS = [
    { label: 'Home', id: 'hero' },
    { label: 'Shop', id: 'shop' },
    { label: 'Collections', id: 'shop' },
    { label: 'About', id: 'about' },
  ]

  return (
    <header className="hidden md:flex sticky top-0 z-50 bg-white border-b border-neutral-200 h-20 px-14 items-center justify-between max-w-[94rem] mx-auto">
      {/* Primary Links */}
      <nav className="flex items-center gap-5 flex-1">
        {NAV_LINKS.map((link, idx) => (
          <a
            key={idx}
            href={`#${link.id}`}
            className="flex flex-col gap-1.5 pt-2 hover:opacity-70 transition-opacity"
          >
            <span className="text-primary-800 text-[11px] font-normal tracking-[1.2px] whitespace-nowrap">
              {link.label}
            </span>
            <div className="h-px bg-white w-[30px]"></div>
          </a>
        ))}
      </nav>

      {/* Logo */}
      <h1 className="text-primary-800 font-serif text-xl font-medium tracking-[4px] whitespace-nowrap flex-1 text-center">
        SWEET ATELIER
      </h1>

      {/* Actions */}
      <div className="flex items-center gap-[22px] flex-1 justify-end relative">
        <div>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="hover:opacity-70 transition-opacity"
            aria-label="Open search"
            aria-expanded={isSearchOpen}
          >
            <Search size={19} className="text-primary-800" />
          </button>
          <SearchDropdown isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </div>
        <div className="flex items-center gap-2.25">
          <button className="hover:opacity-70 transition-opacity">
            <ShoppingBag size={19} className="text-primary-800" />
          </button>
          <div className="w-[18px] h-[18px] bg-primary-500 flex items-center justify-center rounded">
            <span className="text-white text-[9.5px] font-semibold">2</span>
          </div>
        </div>
      </div>
    </header>
  )
}
