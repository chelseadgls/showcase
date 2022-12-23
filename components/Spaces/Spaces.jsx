import React from 'react'
import { useState, useEffect } from 'react'
import { retrieveSpaces } from '../services/APIcalls.jsx'
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