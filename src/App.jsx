import './reset.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart';
import FreeShipping from './components/general/FreeShipping/';
import Home from './components/Home';
import Category from './components/Category';
import Detail from './components/Detail';
import Error404 from './components/general/Error404';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/general/Footer';

function App() {
  return (
    <BrowserRouter>
      <FreeShipping />
      <NavAndWidgetCart />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category/:category_name?">
          <Category />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
