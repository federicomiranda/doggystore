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
import reducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <FreeShipping />
        <NavAndWidgetCart />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/:category_name">
            <Category />
          </Route>
          <Route exact path="/:category_name/:id">
            <Detail />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
