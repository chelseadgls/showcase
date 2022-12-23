import React from 'react'
import { useState, useEffect } from 'react'
import { retrieveItems } from '../../services/APIcalls.jsx'
import axios from 'axios'

export function Items_List({ id, fields }) {
  return (
    <div>
    {/* check if there's an image */}
    { fields?.Images && <img width="400" src={fields.Images[0]?.url} />}
    <a href={fields.URL}>
    {fields.Name}
    </a>
    </div>
  )
}

export default function Items(props){
  const [items, setItems] = useState([]);

  async function fetchItemsData(){
    setItems(await retrieveItems());
  }

  useEffect(() => {
    try {
      fetchItemsData();
    } catch (error) {
      throw err
    }
  },[]);

  return (
    <div className="container">
      {items.map((item, key) => <Spaces_List key={key} {...item} />)}
    </div>
  )

}