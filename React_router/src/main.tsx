import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Root from './router/root.tsx'
import ErrorPage from './Components/ErrorPage.tsx'
import Home from './Components/Home.tsx'
import About from './Components/About.tsx'

const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [{
    path: '',
    element:<Home/>
  }, {
    path: 'about',
    element:<About/>

  }]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
 <RouterProvider router={router}/>
  </React.StrictMode>,
)
