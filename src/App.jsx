import {useState} from 'react';
import './reset.css';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart';
import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts';

function App() {
  const [message, setMessage] = useState('');

  const task = new Promise((resolve, reject) => {
    if(true) {
      setTimeout(() => {
        resolve('Acá están tus datos');
      }, 3000)
    } else {
      reject('Todo mal');
    }
  })

  task
  .then(rta => setMessage(rta))
  .catch(error => console.log(error));

  return (
    <>
      <NavAndWidgetCart />
      {message}
      <FeaturedProducts />
    </>
  );
}

export default App;
