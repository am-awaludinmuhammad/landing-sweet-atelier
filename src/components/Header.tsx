import { Menu, ShoppingBag, Search } from 'lucide-react'
import { useState } from 'react'
import { MobileMenu } from './MobileMenu'
import { SearchDropdown } from './search'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      <header className="md:hidden sticky top-9 z-50 bg-white border-b border-neutral-200 h-16 px-5 flex items-center justify-between relative">
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center hover:opacity-70 transition-opacity"
        >
          <Menu size={20} className="text-primary-800" />
        </button>

        <h1 className="text-primary-800 font-serif text-base font-medium tracking-[3px] whitespace-nowrap">
          SWEET ATELIER
        </h1>

        <div className="flex items-center gap-3">
          <div>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:opacity-70 transition-opacity"
              aria-label="Open search"
              aria-expanded={isSearchOpen}
            >
              <Search size={19} className="text-primary-800 mt-2" />
            </button>
            <SearchDropdown isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
          </div>
          <button className="hover:opacity-70 transition-opacity">
            <ShoppingBag size={19} className="text-primary-800" />
          </button>
          <div className="w-4 h-4 bg-accent-500 flex items-center justify-center rounded">
            <span className="text-white text-[9px] font-semibold">2</span>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
