import { Search, X } from 'lucide-react'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  onClear: () => void
}

export function SearchInput({ value, onChange, onClear }: SearchInputProps) {
  return (
    <div className="flex items-center gap-3 border-b border-neutral-300 pb-3">
      <Search size={18} className="text-neutral-600 flex-shrink-0" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for something sweet..."
        autoFocus
        className="flex-1 bg-transparent text-sm text-primary-800 placeholder-neutral-500 outline-none"
      />
      {value && (
        <button
          onClick={onClear}
          className="text-neutral-600 hover:text-primary-800 transition-colors flex-shrink-0"
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
    </div>
  )
}
