import React from 'react'
import Main from '../components/Main'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Spaces from '../components/Spaces/Spaces'
import Space_Card from '../components/Spaces/Space_Card'

export default function Home() {
  return (
    <div className="container">
        <Spaces />
        <Space_Card />
    </div>
  )
}
