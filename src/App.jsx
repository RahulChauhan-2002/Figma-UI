import './App.css'
import Client from './Pages/Client'
import Hero from './Pages/Hero'
import AppRouter from './Routes/AppRouter'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <>
     <RouterProvider router={AppRouter} />
    </>
  )
}

export default App
