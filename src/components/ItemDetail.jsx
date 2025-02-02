import Button from './button';
import ItemCounter from '../components/itemCounter';
import { createContext } from "react";
import { useContext } from "react";
import cartContext from "../context/cartContext";


function ItemDetail(props) {

    const {title, price, text, description, stock, img, id} = props;
    const { addItem } = useContext(cartContext);

    function handleAddToCart(count) {
        addItem({id, title, price, count, img});
      }

  return (
    <div className="pt-[20px] pb-[40px] ml-20">
          <div 
            className="w-[480px] h-[500px] rounded-2xl shadow-lg overflow-hidden bg-cover bg-center flex flex-col justify-between gradient-to-t from-black via-transparent to-transparent m-4"
            style={{
              backgroundImage: "url('https://picsum.photos/580/600')",
            }}
          >
            
            <div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-sm">{description}</p>
              <p className="text-sm">{price}</p>
            </div>
          </div>
          <ItemCounter onSubmitCount={handleAddToCart} max={stock}/> 
          </div>
                
        </div>
  )
}

export default ItemDetail