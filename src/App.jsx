import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer greeting='Mi catalogo de productos' />
    </div>
  );
}

export default App;
