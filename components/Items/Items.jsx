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
    <div>
      {
        items.map((item) => {
          return (<div> 
            <p>{item.fields[0].Name}</p>
            <img src={item.fields[0].Images[0].url} />
          </div>
          )
        })
      }
    </div>
  )
}

export default Items