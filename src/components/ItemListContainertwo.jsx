import React from 'react'
import { useParams } from 'react-router-dom'
import getAsyncData, { GetAsyncDataByCategory } from '../data/getAsyncData';
import { useState, useEffect } from 'react';
import ItemList from './itemList';


export default function ItemListContainertwo() {

    const [products, setProducts ] = useState([])
    const [loading, setLoading] = useState(true);
    const {catid} = useParams()

    useEffect( () => {

        if ( catid === undefined ) {
          
          setLoading(true)
          const respuestaPromise = getAsyncData()
          console.log(respuestaPromise)
          respuestaPromise
          .then( (respuestaPromise) => {
              setProducts(respuestaPromise)
              setLoading(false)
          })
        } else {          
          setLoading(true)
          const respuestaPromise = GetAsyncDataByCategory(catid)
          console.log(respuestaPromise)
          respuestaPromise
          .then( (respuestaPromise) => {
              setProducts(respuestaPromise)
              setLoading(false)
          })}

            
    }, [catid] )
    
    if (loading) {
        return <div className="text-center text-gray-600">Loading products...</div>; // Display while loading
      }
    



  return (
    <div className='flex flex-wrap'>
            
         <ItemList products={products}/>
            
    </div>
  )
}
