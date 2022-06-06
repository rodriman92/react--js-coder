import {Spinner } from 'react-bootstrap';
import  './ItemListContainer.css';
import { productos } from './mock/data';
import {pedirdatos} from './mock/pedirdatos.js';
import { useState } from 'react';
import { useEffect } from 'react';
import {Itemlist} from './itemlist';
import { Item } from './item';


 export function ItemListContainer ()  {
    const [items, setItems] =useState([])
    const[loading, setLoading]=useState(true)

    
   
   useEffect(() => { 

     pedirdatos()
    .then((resp) => {
      setItems(resp)
      
    })
    .catch((error) => {
      console.log( "ERROR", error)
    })
    .finally(() =>{setLoading(false)
    })
},[])
  return ( 
     < >
      {
        loading  
        ? <Spinner animation="border"/>

        : <Itemlist items={items}/>
      }
      </>
      )
 }
 export default ItemListContainer
    
  
   
