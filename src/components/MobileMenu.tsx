import { X } from 'lucide-react'
import { Button } from './ui/Button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const PRIMARY_MENU_ITEMS = [
  { label: 'Shop All', index: '01' },
  { label: 'Whole Cakes', index: '02' },
  { label: 'Cake Slices', index: '03' },
  { label: 'Gift Collections', index: '04' },
  { label: 'Our Story', index: '05' },
]

const UTILITY_LINKS = ['Search', 'Sign In', 'Track My Order']
const SOCIAL_LINKS = ['INSTAGRAM', 'TIKTOK', 'FACEBOOK']

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed inset-0 z-50 bg-white flex flex-col overflow-y-auto">
        {/* Header with Close */}
        <div className="sticky top-0 bg-white border-b border-neutral-200 h-16 px-5 flex items-center justify-between flex-shrink-0">
          <button
            onClick={onClose}
            className="flex items-center hover:opacity-70 transition-opacity"
          >
            <X size={20} className="text-primary-800" />
          </button>

          <h1 className="text-primary-800 font-serif text-base font-medium tracking-[3px] whitespace-nowrap">
            SWEET ATELIER
          </h1>

          <div className="w-6" />
        </div>

        {/* Menu Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Primary Menu */}
            <div className="px-6 py-2">
              {PRIMARY_MENU_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border-b border-neutral-200 py-[15px]"
                >
                  <h3 className="text-primary-800 font-serif font-medium">
                    {item.label}
                  </h3>
                  <span className="text-neutral-600 text-[10px] font-normal tracking-[1px]">
                    {item.index}
                  </span>
                </div>
              ))}
            </div>

            {/* Utility Links */}
            <div className="px-6 py-5 flex flex-col gap-3">
              {UTILITY_LINKS.map((link, idx) => (
                <button
                  key={idx}
                  className="text-primary-800 text-sm font-normal text-left hover:opacity-70 transition-opacity"
                >
                  {link}
                </button>
              ))}
            </div>

            {/* Contact Band */}
            <div className="mx-6 bg-primary-50 px-6 py-6 flex flex-col gap-2.5 rounded">
              <p className="text-accent-500 text-[10px] font-normal tracking-[1.3px]">
                GET IN TOUCH
              </p>
              <p className="text-primary-800 text-sm font-normal">
                hello@sweetatelier.com
              </p>
              <p className="text-primary-800 text-sm font-normal">
                +62 812 0000 0000
              </p>
              <p className="text-neutral-500 text-[11.5px] font-normal">
                Monday - Saturday, 09:00 - 18:00
              </p>
            </div>

            {/* CTA */}
            <div className="px-6 py-[18px]">
              <Button variant="primary" size="md" className="w-full uppercase text-xs">
                Explore Our Collection
              </Button>
            </div>
          </div>

          {/* Menu Bottom */}
          <div className="border-t border-neutral-200 px-6 py-5 flex flex-col gap-3">
            <div className="flex gap-[18px]">
              {SOCIAL_LINKS.map((social, idx) => (
                <button
                  key={idx}
                  className="text-primary-800 text-[10px] font-normal tracking-[1.2px] hover:opacity-70 transition-opacity"
                >
                  {social}
                </button>
              ))}
            </div>
            <p className="text-neutral-600 text-[10.5px] font-normal">
              &copy; {new Date().getFullYear()} Sweet Atelier. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
