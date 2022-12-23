import React from 'react'
import Main from '../components/Main'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Spaces from '../components/Spaces/Spaces'

export default function Home() {
  return (
    <div className="container">
        <Spaces />
    </div>
  )
}
