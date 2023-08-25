import React from 'react'
import ReactDOM from 'react-dom/client'
import AboutPage from './pages/About'
import ContactsPage from './pages/Contacts'
import HomePage from './pages/Home'
import ProjectsPage from './pages/Projects'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'

const paths = createBrowserRouter([
  {
    path: '/',
    element:<HomePage/>, 
    errorElement:<ErrorPage/>,
  },
  {
    path: '/about',
    element:<AboutPage/>, 
    errorElement:<ErrorPage/>,
  },
  {
    path: '/contacts',
    element:<ContactsPage/>, 
    errorElement:<ErrorPage/>,
  },
  {
    path: '/projects',
    element:<ProjectsPage/>, 
    errorElement:<ErrorPage/>,
  },  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>,
)
