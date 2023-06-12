import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Anime, Comics, Figuras, Home, Mangas } from './pages';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

let fondoColor = document.getElementById("colorFondo");
fondoColor.classList.add('colorFondo')

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:catId' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
