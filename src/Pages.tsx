import Navbar from '@/components/Web/Navbar'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

export default function Pages():React.ReactNode {
  return (
    <div className='bg-muted-background'>
        <Navbar />
        <Routes>
            <Route path={"/"} element={<Home />} />
        </Routes>
    </div>
  )
}
