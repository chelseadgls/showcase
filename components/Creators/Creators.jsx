import React from 'react'
import { useState, useEffect } from 'react'
import { retrieveCreators } from '../../services/APIcalls.jsx'
import axios from 'axios'

export function Creators_List({ id, fields }) {
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

export default function Creators(props){
  const [creators, setCreators] = useState([]);

  async function fetchCreatorsData(){
    setCreators(await retrieveCreators());
  }

  useEffect(() => {
    try {
      fetchCreatorsData();
    } catch (error) {
      throw err
    }
  },[]);

  return (
    <div className="container">
      {creators.map((creator, key) => <Creators_List key={key} {...creator} />)}
    </div>
  )

}