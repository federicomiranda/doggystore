import './reset.css';
import Nav from './components/general/Nav/Nav';
import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts';

function App() {
  const cartelSaludo = () => {
    alert('Hola mundo');
  }

  return (
    <>
      <Nav titulo="DoggyStore" action={cartelSaludo} />
      <FeaturedProducts />
    </>
  );
}

export default App;
