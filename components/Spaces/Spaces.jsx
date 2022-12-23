import React from 'react'

const spaces = [
  {
    id: 1,
    name: 'The William Vale',
    href: '#',
    location: 'New York, NY',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    category: 'Hotel',
  },
]

export default function Spaces() {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Spaces</h2>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

        {spaces.map((space) => (
          <div className="border-2 py-6 px-6 rounded-lg">
            <a key={space.id} href={space.href} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={space.imageSrc}
                alt={space.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-lg text-gray-700">{space.name}</h3>
            <p className="mt-1 text-sm font-medium text-gray-900">{space.location}</p>
            <p className="mt-4 px-1.5 text-sm font-sm text-gray-900 bg-gray-200 rounded-lg w-12">{space.category}</p>
          </a>
          </div>
        ))}


      </div>
    </div>
  </div>
  )
}
