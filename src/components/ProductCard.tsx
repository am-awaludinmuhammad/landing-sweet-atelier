interface ProductCardProps {
  name: string
  price: string
  badge?: string
}

export function ProductCard({ name, price, badge }: ProductCardProps) {
  return (
    <div className="flex flex-col flex-1 gap-2.5">
      <div className="w-full aspect-square bg-gray-200 relative">
        {badge && (
          <div className="absolute top-0 left-0 bg-white px-1.5 py-1">
            <span className="text-primary-800 text-[7.5px] font-normal tracking-[1.1px] whitespace-nowrap">
              {badge}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-primary-800 font-serif text-sm font-medium tracking-[0.2px]">
          {name}
        </h4>
        <p className="text-neutral-500 text-[10.5px] font-normal tracking-[0.3px]">
          {price}
        </p>
      </div>
    </div>
  )
}
