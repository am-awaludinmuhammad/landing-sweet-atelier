export interface FavoriteProduct {
  id: string
  title: string
  description: string
  price: number
  badge?: string
  imageUrl: string
}

export const favoriteProducts: FavoriteProduct[] = [
  {
    id: 'signature-chocolate',
    title: 'Signature Chocolate',
    description: 'Dark chocolate ganache, cocoa sponge.',
    price: 485000,
    badge: 'BEST SELLER',
    imageUrl: '/images/signature-chocolate.jpg',
  },
  {
    id: 'classic-strawberry',
    title: 'Classic Strawberry',
    description: 'Vanilla sponge, fresh strawberries.',
    price: 420000,
    imageUrl: '/images/classic-strawberry.jpg',
  },
  {
    id: 'vanilla-berry-tart',
    title: 'Vanilla Berry Tart',
    description: 'Creamy vanilla, assorted berries.',
    price: 145000,
    badge: 'NEW',
    imageUrl: '/images/vanilla-berry-tart.jpg',
  },
  {
    id: 'butter-croissant',
    title: 'Butter Croissant',
    description: 'Flaky layers, golden butter.',
    price: 38000,
    imageUrl: '/images/butter-croissant.png',
  },
]
