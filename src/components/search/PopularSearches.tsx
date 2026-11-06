interface PopularSearchesProps {
  onSelect: (keyword: string) => void
}

const POPULAR_KEYWORDS = ['Chocolate Cake', 'Birthday Cake', 'Strawberry', 'Croissant']

export function PopularSearches({ onSelect }: PopularSearchesProps) {
  return (
    <div className="pt-4">
      <p className="text-[9px] text-neutral-600 tracking-[1.6px] font-normal mb-3">
        POPULAR SEARCHES
      </p>
      <div className="flex flex-wrap gap-2">
        {POPULAR_KEYWORDS.map((keyword) => (
          <button
            key={keyword}
            onClick={() => onSelect(keyword)}
            className="px-3 py-2 border border-neutral-300 text-xs text-neutral-700 hover:border-primary-800 hover:text-primary-800 transition-colors"
          >
            {keyword}
          </button>
        ))}
      </div>
    </div>
  )
}
