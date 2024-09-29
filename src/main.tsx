import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './Styles.css'
import Nav from './Nav.tsx'
import NoPage from './pages/NoPage.tsx';
import HomePage from "./pages/HomePage.tsx";
import RulesPage from "./pages/RulesPage.tsx";
import ImpressumPage from "./pages/ImpressumPage.tsx";
import Dataprotection from "./pages/Dataprotection.tsx"

const router = createBrowserRouter([
  {
    path: "/", element: <Nav />, children: [
      {
        path: "*", element: <NoPage />
      },
      {
        path: "/", element: <HomePage />
      },
      {
        path: "Regeln", element: <RulesPage />
      }, 
      {
        path: "Impressum", element: <ImpressumPage />
      },
      {
        path: "Datenschutzerklährung", element: <Dataprotection />
      }
    ] 
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
