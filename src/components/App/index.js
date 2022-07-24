import axios from 'axios';

import './styles.scss';

import FactButton from 'src/components/FactButton/FactButton';
import CatFact from '../CatFact/CatFact';
import PictureButton from '../PictureButton/PictureButton';
import CatPicture from '../CatPicture/CatPicture';

import { useEffect, useState } from 'react';

// == Composant
function App() {
  const [catFact, setCatFact] = useState('');
  const [catPicture, setCatPicture] = useState('');

  const loadRandomCatFact = () => {
    axios
      .get('https://cat-fact.herokuapp.com/facts/random')
      .then((response) => {
        setCatFact(response.data.text);
      })
      .catch((error) => {
        console.log("Erreur !", error.message);
      })
  };

  const loadCatPictures = () => {
    axios
      .get('https://api.thecatapi.com/v1/images/search')
      .then((response) => {
        setCatPicture(response.data[0].url)
      })
      .catch((error) => {
        console.log("Erreur !", error.message);
      })
  };

  useEffect(() => {
    loadRandomCatFact();
    loadCatPictures();
  }, []);

  return (
    <div className="app">
      <h1 className='app-title'>Cat is the new meow</h1>
      <FactButton loadRandomCatFact={loadRandomCatFact} />
      <CatFact catFact={catFact} />
      <CatPicture catPicture={catPicture} />
      <PictureButton loadCatPictures={loadCatPictures} />
    </div>
  );
}

// == Export
export default App;
