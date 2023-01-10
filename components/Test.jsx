import React from 'react'

function Test() {

  const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]

  return (
    <div className="bg-blue-400 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        <div className="bg-white p-3 rounded">1</div>
        <div className="bg-white p-3 rounded">2</div>
        <div className="bg-white p-3 rounded">3</div>
        <div className="bg-white p-3 rounded">4</div>
        <div className="bg-white p-3 rounded">5</div>
        <div className="bg-white p-3 rounded">6</div>
        <div className="bg-white p-3 rounded">7</div>
        <div className="bg-white p-3 rounded">8</div>
        <div className="bg-white p-3 rounded">9</div>
      </div>
    </div>
  )
}

export default Test