import { cn } from '../lib/utils'
import { Button } from './ui/Button'

export function Footer() {
  return (
    <footer className="bg-white px-5">
      <div className="h-px bg-neutral-200 mb-0"></div>

      {/* Newsletter */}
      <div className={cn(
        "py-[48px] flex flex-col gap-5", 
        "md:gap-6 md:py-[78px]",
        "lg:flex-row lg:items-center lg:justify-between"
      )}>

        {/* Text Content */}
        <div className="flex flex-col gap-3.5">
          <h3 className="text-primary-800 font-serif text-xl font-medium tracking-[0.2px] leading-[26px]">
            A Little Sweetness in Your Inbox.
          </h3>

          <p className="text-neutral-500 text-xs font-normal leading-5">
            Be the first to discover new creations, seasonal collections, and <br /> special treats.
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="flex flex-col gap-2.5 pt-1.5 md:flex-row md:items-center lg:pt-0 lg:w-[35%]">
          <input
            type="email"
            placeholder="Your email address"
            className="py-3.5 border border-neutral-200 px-3.5 text-neutral-500 placeholder-neutral-500 text-sm md:text-[11.5px] font-normal tracking-[0.3px] flex-1 min-w-0"
          />

          <Button
            variant="primary"
            className="w-full uppercase flex items-center justify-center md:w-auto md:shrink-0"
          >
            <span className="text-[10px] py-1">Subscribe</span>
          </Button>
        </div>

      </div>


      {/* Footer Columns */}
      <div className="py-10 flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:grid-cols-4">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <h4 className="text-primary-800 font-serif text-base font-medium tracking-[3.2px] whitespace-nowrap">
            SWEET ATELIER
          </h4>
          <p className="text-neutral-500 text-[11.5px] font-normal leading-[21px]">
            Thoughtfully crafted cakes and pastries, made to bring a little sweetness to every
            occasion.
          </p>
          <div className="flex gap-4 pt-1">
            <a href="#" className="text-primary-800 text-[8.5px] font-normal tracking-[1.5px] hover:underline">
              INSTAGRAM
            </a>
            <a href="#" className="text-primary-800 text-[8.5px] font-normal tracking-[1.5px] hover:underline">
              TIKTOK
            </a>
            <a href="#" className="text-primary-800 text-[8.5px] font-normal tracking-[1.5px] hover:underline">
              FACEBOOK
            </a>
          </div>
        </div>

        {/* Links Sections */}
        <div className="flex flex-col gap-3.5">
          <h5 className="text-neutral-500 text-[9px] font-normal tracking-[2px] whitespace-nowrap">
            EXPLORE
          </h5>
          <div className="flex flex-col gap-2.75">
            <a href="#" className="text-primary-800 text-xs font-normal tracking-[0.2px] hover:underline">
              Home
            </a>
            <a href="#" className="text-primary-800 text-xs font-normal tracking-[0.2px] hover:underline">
              Shop All
            </a>
            <a href="#" className="text-primary-800 text-xs font-normal tracking-[0.2px] hover:underline">
              Our Collections
            </a>
            <a href="#" className="text-primary-800 text-xs font-normal tracking-[0.2px] hover:underline">
              About Us
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <h5 className="text-neutral-500 text-[9px] font-normal tracking-[2px] whitespace-nowrap">
            CUSTOMER CARE
          </h5>
          <div className="flex flex-col gap-2.75">
            <a href="#" className="text-primary-800 text-xs font-normal tracking-[0.2px] hover:underline">
              Contact Us
            </a>
            <a href="#" className="text-primary-800 text-xs font-normal tracking-[0.2px] hover:underline">
              FAQs
            </a>
            <a href="#" className="text-primary-800 text-xs font-normal tracking-[0.2px] hover:underline">
              Shipping Information
            </a>
            <a href="#" className="text-primary-800 text-xs font-normal tracking-[0.2px] hover:underline">
              Order Information
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <h5 className="text-neutral-500 text-[9px] font-normal tracking-[2px] whitespace-nowrap">
            GET IN TOUCH
          </h5>
          <div className="flex flex-col gap-2.5">
            <p className="text-primary-800 text-[11.5px] font-normal tracking-[0.2px]">
              hello@sweetatelier.com
            </p>
            <p className="text-primary-800 text-[11.5px] font-normal tracking-[0.2px]">
              +62 812 0000 0000
            </p>
            <p className="text-neutral-500 text-[11.5px] font-normal tracking-[0.2px]">
              Your City, Indonesia
            </p>
            <p className="text-neutral-500 text-[11.5px] font-normal leading-[18px]">
              Monday - Saturday, 09:00 - 18:00
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200 pt-6 pb-8">
        <p className="text-neutral-500 text-[10px] font-normal tracking-[0.3px] mb-3">
          &copy; {new Date().getFullYear()} Sweet Atelier. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a href="#" className="text-primary-800 text-[10px] font-normal tracking-[0.3px] hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-primary-800 text-[10px] font-normal tracking-[0.3px] hover:underline">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  )
}
