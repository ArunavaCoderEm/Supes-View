import Navbar from '@/components/Web/Navbar'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

export default function Pages():React.ReactNode {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path={"/"} element={<></>} />
        </Routes>
    </>
  )
}
