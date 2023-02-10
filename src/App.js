//importer React
import React, {useState, useEffect} from 'react';
//Importation des différentes pages
import Home from './pages/Home/Home'
import Error404 from './pages/Error404/Error404'

//Importer le webfontloader
import WebFont from 'webfontloader';

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
    <Home />
    // <Error404 />
  )
}

export default App;
