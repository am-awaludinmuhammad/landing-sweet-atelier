
import { ArrowRight } from 'lucide-react'
import { cn } from '../lib/utils'

export function AboutSection() {
  return (
    <div className={cn(
      "px-5 py-16 md:py-24 flex flex-col gap-10 items-start max-w-[94rem] mx-auto w-full",
      "md:px-9 md:flex-row md:gap-12",
      'lg:px-14 lg:py-[120px]'
    )}>

      {/* Image Composition */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-[700px] shrink-0">

        {/* Main Image */}
        <div
          className="absolute left-0 top-0 w-[90.7%] h-[92.8%] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about.png')" }}
        />

        {/* Secondary Image */}
        <div
          className="absolute right-0 bottom-0 w-[30.7%] h-[30.4%] bg-cover bg-center border-8 border-white"
          style={{ backgroundImage: "url('/images/about2.png')" }}
        />

      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:self-stretch md:justify-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 w-fit">
          <div className="w-5 h-px bg-neutral-200" />
          <p className="text-neutral-500 text-[9px] md:text-[9.5px] font-normal tracking-[1.6px] md:tracking-[2px] whitespace-nowrap">
            OUR STORY
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-primary-800 font-serif text-2xl md:text-4xl font-medium tracking-[0.3px] leading-[31px] md:leading-[39px]">
          A Little More Than<br />Just Baking.
        </h2>

        {/* Paragraphs */}
        <div className="flex flex-col gap-3 md:gap-4">
          <p className="text-neutral-500 text-xs md:text-sm font-normal leading-[22px] md:leading-[25px]">
            At Sweet Atelier, we believe every beautiful moment deserves something special.
          </p>
          <p className="text-neutral-500 text-xs md:text-sm font-normal leading-[22px] md:leading-[25px]">
            From carefully selected ingredients to the final details of every creation, each cake
            and pastry is thoughtfully made to bring people together and make everyday moments
            memorable.
          </p>
        </div>

        {/* CTA */}
        <button className="flex items-center gap-2.5 pt-1 w-fit hover:opacity-80 transition-opacity">
          <div className="flex flex-col gap-1.5">
            <span className="text-primary-800 text-[9px] md:text-[10px] font-normal tracking-[1.8px] whitespace-nowrap">
              DISCOVER OUR STORY
            </span>
            <div className="w-32 h-px bg-primary-800" />
          </div>
          <ArrowRight size={12} className="text-neutral-500" />
        </button>

      </div>
    </div>
  )
}
