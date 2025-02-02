import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ItemListContainer from './components/ItemListContainer';
import { CartContextProvider } from './context/cartContext';
import ItemListContainertwo from './components/ItemListContainertwo';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from "./components/cartContainer";
import { createDocument, exportProductsToDB } from './data/database';
import Footer from './components/Footer';

function App() {


  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
          <div className='bg-[#f5f5f7]'>
            <Nav />
            <ItemListContainer />
          </div>


        <Routes>
            <Route path="/" element={<ItemListContainertwo />} />
            <Route path="/Item/:id" element={<ItemDetailContainer />} texto={"Compras por categoría"} />
            <Route path="/category/:catid" element={<ItemListContainertwo />} />
            <Route path="/cart" element={<CartContainer />} />
        </Routes>

          
          
      </BrowserRouter>
    </CartContextProvider>
    <Footer />
    </>
  )
}

export default App;