import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Components/Layout'
import Hero from '../Pages/Hero'
import Client from '../Pages/Client'
import Community1 from '../Pages/Community1'
import Community from '../Pages/Community'

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Hero /> },
      { path: '/Client', element: <Client /> },
      { path: '/Community', element: <Community /> },
      { path: '/Community1', element: <Community1 /> }
    ]
  }
])

export default AppRouter
