import './reset.css';
import Nav from './components/general/Nav/Nav';
import ListOfProducts from './components/general/ListOfProducts/ListOfProducts';

function App() {
  const cartelSaludo = () => {
    alert('Hola mundo');
  }

  return (
    <>
      <Nav titulo="DoggyStore" action={cartelSaludo} />
      <ListOfProducts />
    </>
  );
}

export default App;
