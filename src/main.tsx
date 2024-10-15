import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import MenuPage from './component/MenuPage';
import AboutPage from './component/AboutPage';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/menu",
    element: <MenuPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <App />,
  },

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
