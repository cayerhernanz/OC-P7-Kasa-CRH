//importer React
import React, {useEffect} from 'react';

//Importer React Router (fonctions createBrowserRouter, et RouterProvider)
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Importation des différentes pages
import Home from './pages/Home/Home'
import Error404 from './pages/Error404/Error404'
import About from './pages/About/About'
import Logement from './pages/Logement/logement';

//Importer le webfontloader
import WebFont from 'webfontloader';

//Création des routes du router
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/notfound",
    element: <Error404 />
  },
  {
    path: "/logement/:id",
    element: <Logement />
  }
]);

function App() {
  //Récupère la font avant le render de la page
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat']
      }
    })
    }, []);

  return(
    <RouterProvider router={router}/>
  )
}

export default App;
