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
}

export function Spaces_List({ id, fields }) {

  return (
    // <div className="bg-white">
    //   <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    //     <h2 className="sr-only">Spaces</h2>

    //     <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    //         <a key={fields.Id} href={fields.URL} className="group">
    //           <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
    //             {fields?.Images && <img width="400" src={fields.Images[0]?.url} className="h-full w-full object-cover object-center group-hover:opacity-75" />}
    //           </div>
    //           <h3 className="mt-4 text-sm text-gray-700">{fields.Name}</h3>
    //           <p className="mt-1 text-lg font-medium text-gray-900">{fields.Location}</p>
    //         </a>
    //     </div>
    //   </div>
    // </div>

    // <div className="bg-blue-400 min-h-screen flex items-center justify-center">
    //   <div>grid goes here</div>
    // </div>
    <div></div>
  )
}
