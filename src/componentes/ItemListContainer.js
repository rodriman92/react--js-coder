
import './ItemListContainer.css';
import {useState} from 'react';
 export function ItemListContainer ()  {

   
    const [counter, setCounter] = useState(0)
   
    
    const handleClick1 = () => {
      setCounter(counter + 1)
    }
     
    const handleClick2 = () => {
    setCounter(counter - 1)
    }
    
    return ( 
    < div className='container'>
      <div className='box'>
        <img src='C:\Users\Usuario\Desktop\eccomercePS\pescaditorengo\src\componentes\imagenes\PhotoRoom_20220525_181229.PNG' alt="plantas" height="145px" />
        <h4> plantas</h4>
        
      </div>
    
      <div className='cnt-buttons'>
        <div className='ctn-fbuttons'>
          {counter}
        </div>
        <div className="buttons">
        <button className='decrement' onClick={handleClick2}>-</button>
        <button className='increment' onClick={handleClick1}>+</button> 
        </div>
      </div>
      </div>
    )
  }
    
  export default ItemListContainer