import React from 'react';
import Button from './button';
import { Link } from 'react-router-dom';

function CardProduct(props) {
  const { title, price, text, id } = props;

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
          <p className="text-sm">{text}</p>
          <p className="text-sm">{price}</p>
        </div>
      </div>
        <Link to= {`/item/${id}`}>
          <Button disabled={false}>Ver Detalle</Button>
        </Link>
      </div>
            
    </div>
  );
}

export default CardProduct;
