import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './Styles.css'
import Nav from './Nav.tsx'
import TestPage from './pages/TestPage.tsx';
import NoPage from './pages/NoPage.tsx';
import HomePage from "./pages/HomePage.tsx";
import RulesPage from "./pages/RulesPage.tsx";

const router = createBrowserRouter([
  {
    path: "/", element: <Nav />, children: [
      {
        path: "*", element: <NoPage />
      },
      {
        path: "home", element: <HomePage />
      },
      {
        path: "rules", element: <RulesPage />
      }, 
      {
        path: "test", element: <TestPage />
      }
    ] 
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
