import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ItemListContainer from './components/ItemListContainer';
import FlexContainer from './components/flexContainer';
import ItemCounter from './components/itemCounter';
import ItemListContainertwo from './components/ItemListContainertwo';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <>
    <BrowserRouter>
        <div className='bg-[#f5f5f7]'>
          <Nav />
          <ItemListContainer />
        </div>

      <Routes>
          <Route path="/" element={<ItemListContainertwo />} />
          <Route path="/Item/:id" element={<ItemDetailContainer />} texto={"Compras por categoría"} />
          <Route path="/category/:catid" element={<ItemListContainertwo />} />
      </Routes>

        
        
    </BrowserRouter>
    </>
  )
}

export default App;