import { useState, useRef, useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { SearchInput } from './SearchInput'
import { PopularSearches } from './PopularSearches'
import { TrendingCollection } from './TrendingCollection'
import { SearchResults } from './SearchResults'

interface SearchDropdownProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchDropdown({ isOpen, onClose }: SearchDropdownProps) {
  const [query, setQuery] = useState('')
  const panelRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!isOpen) setQuery('')
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const handlePopularSelect = (keyword: string) => {
    setQuery(keyword)
  }

  const handleClear = () => {
    setQuery('')
  }

  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
          onClick={onClose}
        />
      )}

      <motion.div
        ref={panelRef}
        className="absolute top-full left-0 right-0 md:right-0 md:left-auto mt-0 w-full md:w-[480px] bg-white border border-neutral-200 z-50 md:shadow-lg"
        initial={{ opacity: 0, y: -6 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: 'easeInOut' }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className="p-5 md:p-6 max-h-[70vh] overflow-y-auto">
          <SearchInput
            value={query}
            onChange={setQuery}
            onClear={handleClear}
          />

          {query ? (
            <SearchResults query={query} />
          ) : (
            <>
              <PopularSearches onSelect={handlePopularSelect} />
              <TrendingCollection />
            </>
          )}
        </div>
      </motion.div>
    </>
  )
}
