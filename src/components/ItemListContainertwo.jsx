import React from 'react'
import { useParams } from 'react-router-dom'
import getAsyncData, { GetAsyncDataByCategory } from '../data/database';
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
          respuestaPromise
          .then( (respuestaPromise) => {
              setProducts(respuestaPromise)
              setLoading(false)
          })
        } else {          
          setLoading(true)
          const respuestaPromise = GetAsyncDataByCategory(catid)
          respuestaPromise
          .then( (respuestaPromise) => {
              setProducts(respuestaPromise)
              setLoading(false)
          })}

            
    }, [catid] )
    
    if (loading) {
        return <div className="text-center text-gray-600">Loading products...</div>; 
      }
    



  return (
    <div className='flex flex-wrap'>
            
         <ItemList products={products}/>
            
    </div>
  )
}
