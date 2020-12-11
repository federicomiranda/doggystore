import {useState} from 'react';
import './reset.css';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart';
import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts';

function App() {
  const [nombre, setNombre] = useState('');

  const actualizarNombre = (e) => {
    setNombre(e.target.value);
  }

  return (
    <>
      <NavAndWidgetCart />
      <FeaturedProducts />
      <p>{nombre}</p>
      <input type="text" value={nombre} onChange={actualizarNombre} />
    </>
  );
}

export default App;
