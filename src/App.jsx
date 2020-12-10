import './reset.css';
import Nav from './components/general/Nav/Nav';
import ProductCard from './components/general/ProductCard/ProductCard';

function App() {
  const cartelSaludo = () => {
    alert('Hola mundo');
  }

  return (
    <>
      <Nav titulo="DoggyStore" action={cartelSaludo} />
      <ProductCard titulo="Producto 1" precio="500" />
      <ProductCard titulo="Producto 2" precio="300" />
      <ProductCard titulo="Producto 3" precio="750" />
      <ProductCard titulo="Producto 4" precio="100" />
    </>
  );
}

export default App;
