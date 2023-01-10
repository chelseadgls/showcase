import React from 'react'
import Main from '../components/Main'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Spaces from '../components/Spaces/Spaces'
import Space_Card from '../components/Spaces/Space_Card'
import Test from '../components/Test'

export default function Home() {
  return (
    <div>
        {/* <Spaces />
        <Space_Card /> */}
        <Test />
    </div>
  )
}
