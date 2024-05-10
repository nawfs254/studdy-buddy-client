import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-full md:w-4/5 mx-auto font-bitter'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,
)
