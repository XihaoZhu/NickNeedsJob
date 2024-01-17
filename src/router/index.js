import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Entrance from '@/pages/entrance/index'
import FrontEnd from '@/pages/front-end'
import Blender from '@/pages/Blender'
import PhotoShop from '@/pages/Photoshop'
import Others from '@/pages/others'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Entrance></Entrance>
  },
  {
    path: '/FrontEnd',
    element: <FrontEnd></FrontEnd>
  },
  {
    path: '/Blender',
    element: <Blender></Blender>
  },
  {
    path: '/PhotoShop',
    element: <PhotoShop></PhotoShop>
  },
  {
    path: '/Others',
    element: <Others></Others>
  }
])

export default router
