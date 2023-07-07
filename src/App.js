import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Anime, Comics, Figuras, Home, Mangas } from './pages';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';

let fondoColor = document.getElementById("colorFondo");
fondoColor.classList.add('colorFondo')

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:catId' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
