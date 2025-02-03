import CardProduct from "./CardProduct";

// Presentation component - UI

function ItemList(props) {
  return (
    <>
      {props.products.map(item => (
        <CardProduct  
          key={item.id}
          id={item.id}
          title={item.title} 
          price={item.price} 
          text={item.description}   
        />
      ))}
    </>
  );
}

export default ItemList;


