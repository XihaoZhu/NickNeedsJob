import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Entrance from '@/pages/entrance/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Entrance></Entrance>
  }
])

export default router
