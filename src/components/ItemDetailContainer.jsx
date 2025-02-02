import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {GetAsyncDataById} from "../data/database"
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {
  
    const [itemInfo, setItemInfo] = useState({});
    
    const {id} = useParams()

    useEffect(() => {
        async function getItemData() {
            const itemData = await GetAsyncDataById(id);
            setItemInfo(itemData);
        }
        getItemData();    
    }, [id]);
    
    console.log(itemInfo)
    return (

    <ItemDetail {...itemInfo} id={id}/>

  )
}

export default ItemDetailContainer