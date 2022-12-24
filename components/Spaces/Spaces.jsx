import React from 'react'
import { useState, useEffect } from 'react'
import { retrieveSpaces } from '../../services/APIcalls.jsx'
import axios from 'axios'

export default function Spaces(props){
  const [spaces, setSpaces] = useState([]);

  async function fetchSpacesData(){
    setSpaces(await retrieveSpaces());
  }

  useEffect(() => {
    try {
      fetchSpacesData();
    } catch (error) {
      throw err
    }
  },[]);

  return (
    <div className="container">
      {spaces.map((space, key) => <Spaces_List key={key} {...space} />)}
    </div>
  )

}

export function Spaces_List({ id, fields }) {

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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Spaces</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a key={fields.Id} href={fields.URL} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              {fields?.Images && <img width="400" src={fields.Images[0]?.url} className="h-full w-full object-cover object-center group-hover:opacity-75" />}
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{fields.Location}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{fields.Name}</p>
            </a>
        </div>
      </div>
    </div>
  )
}
