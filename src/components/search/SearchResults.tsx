import { favoriteProducts } from '../../data/favorites'
import { cn } from '../../lib/utils'

interface SearchResultsProps {
  query: string
}

export function SearchResults({ query }: SearchResultsProps) {
  const results = favoriteProducts.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.description?.toLowerCase().includes(query.toLowerCase())
  )

  if (!results.length) {
    return (
      <div className="py-8 text-center">
        <p className="text-sm text-neutral-600">No results found for "{query}"</p>
        <p className="text-xs text-neutral-500 mt-2">Try a different search term</p>
      </div>
    )
  }

  return (
    <div className="pt-4">
      <p className="text-[9px] text-neutral-600 tracking-[1.6px] font-normal mb-4">
        RESULTS ({results.length})
      </p>
      <div className={cn(
        'grid grid-cols-2 gap-3',
        'md:grid-cols-3 md:gap-4'
      )}>
        {results.map((product) => (
          <button
            key={product.id}
            className="text-left group hover:opacity-70 transition-opacity"
          >
            <div className="w-full aspect-square bg-neutral-100 mb-2" />
            <h5 className="text-xs text-primary-800 font-medium line-clamp-2 group-hover:text-primary-900">
              {product.title}
            </h5>
            <p className="text-[11px] text-neutral-600 mt-1">
              {product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}
