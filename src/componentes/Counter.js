import {useState} from 'react';
import './Counter.css' 
const Counter = () => {
    
    const [counter, setCounter] = useState(0)
   
    
    const handleClick1 = () => {
      setCounter(counter + 1)
    }
     
    const handleClick2 = () => {
    setCounter(counter - 1)
    }
    return (
        <div className='cnt-buttons'>
        <div className='ctn-fbuttons'>
          {counter}
        </div>
        <div className="buttons">
        <button className='decrement' onClick={handleClick2}>-</button>
        <button className='increment' onClick={handleClick1}>+</button> 
        </div>
      </div>
     
    )
}


export default Counter