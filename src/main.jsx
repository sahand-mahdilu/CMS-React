import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes.jsx'
import TopBar from './Components/TopBar.jsx'
import SideBar from './Components/SideBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopBar/>
    <div className='flex'>
      <SideBar/>

    <RouterProvider router={router}/>
    </div>
  </StrictMode>,
)
