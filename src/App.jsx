import './reset.css';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart';
import Home from './components/Home';
import Category from './components/Category';
import Detail from './components/Detail';

function App() {
  const sectionToShow = (section) => {
    switch(section) {
      case 'Home': return <Home />;
      case 'Category': return <Category />;
      case 'Detail': return <Detail />;
      default: return <Home />
    }
  }

  return (
    <>
      <NavAndWidgetCart />
      {sectionToShow('Detail')}
    </>
  );
}

export default App;
