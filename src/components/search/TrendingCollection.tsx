import { ArrowRight } from 'lucide-react'

export function TrendingCollection() {
  return (
    <div className="pt-6 border-t border-neutral-200 mt-6">
      <p className="text-[9px] text-neutral-600 tracking-[1.6px] font-normal mb-4">
        TRENDING COLLECTION
      </p>
      <button className="w-full flex items-start gap-4 p-3 hover:bg-neutral-50 transition-colors group">
        <div className="w-16 h-16 bg-neutral-200 flex-shrink-0">
          <img src="/images/gift-collections.png" alt="Gift Collections" className="w-full h-full object-cover object-center" />
        </div>
        <div className="flex-1 text-left min-w-0">
          <h4 className="text-sm text-primary-800 font-medium mb-1 group-hover:text-primary-900">
            Gift Collections
          </h4>
          <p className="text-xs text-neutral-600 line-clamp-2">
            Curated gift boxes and special occasion hampers.
          </p>
        </div>
        <ArrowRight size={16} className="text-neutral-600 mt-1 flex-shrink-0 group-hover:text-primary-800 transition-colors" />
      </button>
    </div>
  )
}
