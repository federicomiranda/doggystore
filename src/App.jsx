import './reset.css';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart';
import Home from './components/Home';
import Category from './components/Category';

function App() {
  const sectionToShow = (section) => {
    switch(section) {
      case 'Home': return <Home />;
      case 'Category': return <Category />;
      default: return <Home />
    }
  }

  return (
    <>
      <NavAndWidgetCart />
      {sectionToShow('Home')}
    </>
  );
}

export default App;
