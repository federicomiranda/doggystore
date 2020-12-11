import {useEffect, useState} from 'react';
import './reset.css';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart';
import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts';

function App() {
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    console.log('Hola mundo');
  }, [nombre])

  return (
    <>
      <NavAndWidgetCart />
      <FeaturedProducts />

      <button onClick={() => setNombre('Fede')}>Cambiar nombre</button>
    </>
  );
}

export default App;
