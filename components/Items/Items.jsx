import React from 'react'
import { useState, useEffect } from 'react'
import { retrieveItems } from '../../services/APIcalls.jsx'

function Items(props) {
  const [items, setItems] = useState([]);

  async function fetchItemsData() {
    setItems(await retrieveItems())
  }

  useEffect(() => {
    try {
      fetchItemsData();
    } catch (error) {
      throw err
    }
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {items.map((item) => {
        return (
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"> 
            <img src={item.fields[0].Images[0].url} className="h-full w-full object-cover object-center group-hover:opacity-75" />
            <p className="mt-4 text-sm text-gray-700">{item.fields[0].Name}</p>
          </div>
          )
        })
          }
          </div>
      </div>
    </div>
  )
}

export default Items