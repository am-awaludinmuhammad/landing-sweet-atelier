import { ArrowRight } from 'lucide-react'
import { cn } from '../lib/utils'
import { categories } from '../data/categories'
import { favoriteProducts } from '../data/favorites'
import { FavoriteProductCard } from './FavoriteProductCard'

export function ShopSection() {
  return (
    <section className={cn(
      'bg-white flex flex-col px-5 py-16',
      'md:px-9 md:py-24',
      'lg:px-14 lg:py-[120px]'
    )}>
      {/* Section Intro */}
      <div className={cn(
        'flex flex-col gap-3 mb-9',
        'md:gap-3.5 md:mb-14',
        'lg:flex-row lg:justify-between lg:items-end lg:gap-12 lg:mb-16'
      )}>
        <div className={cn(
          'flex flex-col gap-3',
          'md:gap-3.5',
          'lg:gap-4 lg:w-fit'
        )}>
          <div className={cn(
            'flex items-center gap-3 w-fit',
            'md:gap-3.5',
            'lg:gap-4'
          )}>
            <div className={cn(
              'h-px bg-neutral-200 w-5',
              'md:w-6',
              'lg:w-7 lg:bg-neutral-300'
            )}></div>
            <p className={cn(
              'text-neutral-500 font-normal whitespace-nowrap text-[9px] tracking-[1.6px]',
              'md:text-[9.5px] md:tracking-[2px]',
              'lg:text-[10px] lg:text-neutral-600 lg:tracking-[2.2px]'
            )}>
              EXPLORE OUR COLLECTION
            </p>
          </div>

          <h2 className={cn(
            'text-primary-800 font-serif font-medium tracking-[0.3px] leading-[31px] text-[27px]',
            'md:text-[34px] md:leading-[39px]',
            'lg:text-[44px] lg:leading-[51px] lg:text-primary-900 lg:whitespace-nowrap'
          )}>
            Something for Every Craving.
          </h2>
        </div>

        <p className={cn(
          'text-neutral-500 font-normal text-[12px] leading-5',
          'md:text-[12.5px] md:leading-[22px] md:w-[420px]',
          'lg:text-[13px] lg:leading-[23px] lg:text-neutral-600 lg:w-[340px] lg:flex-shrink-0'
        )}>
          From signature cakes to freshly baked treats, discover something special for every
          occasion.
        </p>
      </div>

      {/* Category Grid */}
      <div className={cn(
        'grid grid-cols-2 gap-4 mb-7',
        'md:grid md:grid-cols-2 md:gap-7 md:mb-11',
        'lg:grid lg:grid-cols-12 lg:gap-7 lg:mb-14'
      )}>
        {categories.map((cat, idx) => (
          <CategoryCard
            key={cat.id}
            {...cat}
            index={idx}
            variant={getVariant(idx)}
            className={getGridClasses(idx)}
          />
        ))}
      </div>

      {/* Divider */}
      <div className={cn(
        'h-px bg-neutral-200 my-8',
        'md:my-16',
        'lg:my-16 lg:bg-neutral-300'
      )}></div>

      {/* Customer Favorites */}
      <div className={cn(
        'flex flex-col gap-6',
        'md:flex md:flex-col md:gap-8',
        'lg:flex lg:flex-col lg:gap-9'
      )}>
        <h3 className={cn(
          'text-primary-800 font-serif font-medium tracking-[0.3px] whitespace-nowrap text-xl leading-normal',
          'md:text-2xl',
          'lg:text-[32px] lg:text-primary-900'
        )}>
          Our Customer Favorites
        </h3>

        <div className={cn(
          'grid grid-cols-2 gap-4',
          'md:grid md:grid-cols-2 md:gap-7',
          'lg:grid lg:grid-cols-4 lg:gap-7'
        )}>
          {favoriteProducts.map((product) => (
            <FavoriteProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className={cn(
          'flex justify-center pt-2',
          'md:pt-6',
          'lg:pt-4'
        )}>
          <button className={cn(
            'border border-primary-800 px-7 py-4 text-primary-800 font-normal text-[10px] tracking-[2px] hover:bg-primary-800 hover:text-white transition-colors whitespace-nowrap'
          )}>
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  )
}

function getVariant(index: number) {
  if (index === 0) return 'featured-main'
  if (index === 1) return 'featured-side'
  return 'regular'
}

function getGridClasses(index: number) {
  return cn(
    // Mobile: index 0 full-width (1 col), rest 2-col layout
    'grid-cols-2',
    index === 0 && 'col-span-2',
    // Tablet: reorder visually with order property
    'md:col-span-1',
    index === 0 && 'md:col-span-2 md:order-1',
    index === 1 && 'md:col-span-1 md:order-5',
    index === 2 && 'md:col-span-1 md:order-2',
    index === 3 && 'md:col-span-1 md:order-3',
    index === 4 && 'md:col-span-1 md:order-4',
    // Desktop: explicit col-span, reset order
    'lg:order-none',
    index === 0 && 'lg:col-span-8',
    index === 1 && 'lg:col-span-4',
    index === 2 && 'lg:col-span-4',
    index === 3 && 'lg:col-span-4 lg:pt-10',
    index === 4 && 'lg:col-span-4'
  )
}

interface CategoryCardProps {
  id: string
  title: string
  description: string
  path: string
  featured: boolean
  sequence: number
  imageUrl: string
  index: number
  className?: string
  variant?: 'featured-main' | 'featured-side' | 'regular'
}

function CategoryCard({ title, description, path, imageUrl, index, className }: CategoryCardProps) {
  // Index 0: always 520px (featured-main)
  // Index 1: 520px on desktop (lg:), 320px on mobile/tablet
  // Rest: always 320px
  const heightClass = 
    index === 0 ? 'h-[520px]' :
    index === 1 ? 'h-[320px] lg:h-[520px]' : 'h-[320px]'

  return (
    <div className={cn('flex flex-col gap-0', className)}>
      <div className={cn(
        'w-full flex items-center justify-center overflow-hidden',
        heightClass
      )}>
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className={cn(
        'flex flex-col gap-[5px] pt-3',
        'md:gap-[6px] md:pt-4',
        'lg:gap-[7px] lg:pt-5'
      )}>
        <h4 className={cn(
          'text-primary-800 font-serif font-medium tracking-[0.2px] leading-normal text-[19px]',
          'md:text-[22px]',
          'lg:text-[22px] lg:text-primary-900 lg:whitespace-nowrap'
        )}>
          {title}
        </h4>

        <p className={cn(
          'text-neutral-500 font-normal text-[11px] leading-[18px]',
          'md:text-[12px] md:leading-5',
          'lg:hidden lg:text-[12.5px] lg:text-neutral-600 lg:leading-[21px]'
        )}>
          {description}
        </p>

        <p className={cn(
          'hidden text-neutral-600 font-normal',
          'lg:block lg:text-[12.5px] lg:leading-[21px]'
        )}>
          {description}
        </p>

        <a href={path} className={cn(
          'flex items-center gap-1.5 w-fit pt-0.5',
          'md:gap-2 md:pt-1',
          'lg:gap-2 lg:pt-1 hover:opacity-70 transition-opacity'
        )}>
          <span className={cn(
            'text-primary-800 font-normal whitespace-nowrap text-[8.5px] tracking-[1.6px]',
            'md:text-[9px]',
            'lg:text-[9.5px] lg:text-primary-900 lg:tracking-[1.8px]'
          )}>
            {(title === 'Whole Cakes' || title === 'Gift Collections') ? 'EXPLORE COLLECTION' : 'EXPLORE'}
          </span>
          <ArrowRight className={cn(
            'flex-shrink-0 w-2.5 h-2.5',
            'md:w-3 md:h-3',
            'lg:w-3 lg:h-3'
          )} style={{ color: '#806C5C' }} />
        </a>
      </div>
    </div>
  )
}
