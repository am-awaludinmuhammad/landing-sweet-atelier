import { Button } from './ui/Button'
import { Reveal, ImageReveal } from './animations'

export function HeroSection() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[100rem] flex flex-col md:flex-row items-center justify-start gap-6 md:gap-0 px-6 md:px-0 py-8 md:py-0 md:h-[500px]">
        {/* Copy */}
        <div className="flex flex-col items-center md:items-start justify-start gap-6 md:flex-1 md:pl-14 md:pr-8">
          {/* Eyebrow */}
          <Reveal direction="up" initial>
            <div className="flex items-center gap-3 md:gap-4 w-fit">
              <div className="w-5 md:w-7 h-px bg-neutral-200 md:bg-neutral-300" />
              <p className="text-neutral-500 md:text-neutral-600 text-[9px] md:text-[10px] tracking-[1.6px] md:tracking-[2.2px] whitespace-nowrap">
                ARTISAN CAKES &amp; BAKED GOODS
              </p>
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal direction="up" delay={0.1} initial>
            <h2 className="text-primary-800 font-serif text-3xl md:text-[60px] tracking-[0.3px] md:tracking-[0.5px] leading-[41px] md:leading-[71px] text-center md:text-left">
              Made with Love,
              <br />
              Created to Delight.
            </h2>
          </Reveal>

          {/* Description */}
          <Reveal direction="up" delay={0.2} initial>
            <p className="text-neutral-500 md:text-neutral-600 text-[13.5px] md:text-[14.5px] leading-6 md:leading-[26px] text-center md:text-left max-w-[420px] md:max-w-[400px]">
              Thoughtfully crafted cakes and pastries, made with quality ingredients and a passion for
              every little detail.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal direction="up" delay={0.3} initial>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-2 md:pt-4 w-full md:w-fit">
              <Button
                variant="primary"
                size="lg"
                className="w-full md:w-auto uppercase md:px-7 md:py-[18px] md:text-[10.5px] md:tracking-[2px]"
              >
                <div className="text-[10px]">Explore Our Collection</div>
              </Button>

              <button className="flex items-center gap-1.5 md:gap-[7px] w-fit hover:opacity-80 md:hover:opacity-70 transition-opacity self-center md:self-auto">
                <div className="flex flex-col items-center gap-1.5 md:gap-[7px]">
                  <span className="text-primary-800 text-[10px] md:text-[10.5px] tracking-[1.9px] md:tracking-[2px]">
                    DISCOVER OUR STORY
                  </span>
                  <div className="w-36 md:w-[151px] h-px bg-primary-800 md:bg-primary-900" />
                </div>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Hero Image */}
        {/* <div className="hidden md:block md:flex-1 h-[440px] min-h-0 w-full relative overflow-hidden">
          <ImageReveal initial>
            <div className="absolute inset-0 right-[calc((1440px-100vw)/2)]">
              <img
                src="/images/hero.png"
                alt="Artisan bakery cakes and baked goods"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </ImageReveal>
        </div> */}
            <div className="hidden md:block md:flex-1 h-[calc(100%-60px)] min-h-0 w-full relative overflow-hidden">
              <div className="absolute inset-y-0">
                <ImageReveal initial>
                <img
                  src="/images/hero.png"
                  alt="Artisan bakery cakes and baked goods"
                  className="w-full h-full object-cover object-center"
                />
                </ImageReveal>
              </div>
            </div>
      </div>
    </section>
  )
}