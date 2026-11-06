import { cn } from '../lib/utils'
import { formatCurrency } from '../lib/format-currency'
import type { FavoriteProduct } from '../data/favorites'

interface FavoriteProductCardProps {
  product: FavoriteProduct
}

export function FavoriteProductCard({ product }: FavoriteProductCardProps) {
  return (
    <article className="flex flex-col gap-0">
      {/* Image */}
      <div className={cn(
        'relative w-full bg-neutral-200',
        'h-[200px]',
        'md:h-[280px]',
        'lg:h-[360px]',
        'flex items-center justify-center overflow-hidden'
      )}>
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover"
        />

        {/* Badge */}
        {product.badge && (
          <span className={cn(
            'absolute top-3 left-3',
            'bg-white text-primary-800',
            'text-[8.5px] font-normal tracking-[1.4px]',
            'px-[9px] py-[6px]',
            'whitespace-nowrap'
          )}>
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className={cn(
        'flex flex-col gap-1.5',
        'md:gap-1.5',
        'lg:gap-1.5',
        'pt-3 md:pt-4 lg:pt-3.5'
      )}>
        <h4 className={cn(
          'text-primary-800 font-serif font-medium tracking-[0.2px]',
          'text-[16px] md:text-[17px]',
          'lg:text-[18.5px]',
          'leading-normal whitespace-nowrap'
        )}>
          {product.title}
        </h4>

        <p className={cn(
          'text-neutral-600 font-normal',
          'text-[10px] md:text-[10.5px]',
          'lg:text-[11.5px]',
          'lg:leading-[18px] line-clamp-2'
        )}>
          {product.description}
        </p>

        <span className={cn(
          'text-primary-800 font-normal tracking-[0.3px]',
          'text-[11px] md:text-[11.5px]',
          'lg:text-[12.5px]',
          'leading-normal whitespace-nowrap'
        )}>
          {formatCurrency(product.price)}
        </span>
      </div>
    </article>
  )
}
