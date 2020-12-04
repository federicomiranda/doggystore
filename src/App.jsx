import './reset.css';
import Nav from './components/general/Nav/Nav';
import Modal from './components/general/Modal/Modal';

function App() {
  const cartelSaludo = () => {
    alert('Hola mundo');
  }

  return (
    <>
      <Nav titulo="DoggyStore" action={cartelSaludo} />
      <a href="#modal">Abrir modal</a>
      <Modal>
        <h2>Bienvenidos a mi tienda</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam nostrum quis sit? Facere consectetur ab pariatur, culpa reprehenderit quisquam natus, doloremque magni consequatur alias quaerat soluta blanditiis sit. Non, unde.</p>
      </Modal>
    </>
  );
}

export default App;
