import React from 'react'
import Main from '../components/Main'
import axios from 'axios'
import { useState, useEffect } from 'react'

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

export default function Home() {
  const [spaces, setSpaces] = useState([]);
  const [creators, setCreators] = useState([]);
  const [items, setItems] = useState([]);

  async function retrieveSpaces() {
    const { data } = await axios.get("https://eozjtvk41svx4nc.m.pipedream.net");
  
    setSpaces(data);  
}

async function retrieveCreators() {
  const { data } = await axios.get("https://eojbtbh68hot62m.m.pipedream.net");

  setCreators(data);  
}

async function retrieveItems() {
  const { data } = await axios.get("https://eoc685b1ynuwbq.m.pipedream.net");

  setItems(data);  
}

  useEffect(() => {
    retrieveSpaces();
    retrieveCreators();
    retrieveItems();
  },[]);

  return (
    <div className="container">
      {spaces.map((space, key) => <Spaces_List key={key} {...space} />)}
      {creators.map((creator, key) => <Creators_List key={key} {...creator} />)}
      {items.map((item, key) => <Items_List key={key} {...item} />)}
    </div>
  )
}
