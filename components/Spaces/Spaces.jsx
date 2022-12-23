import React from 'react'
import { useState, useEffect } from 'react'
import { retrieveSpaces } from '../../services/APIcalls.jsx'
import axios from 'axios'

export function Spaces_List({ id, fields }) {
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