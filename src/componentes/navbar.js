
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './navbar.css';
 const Navbar = () => {
    return (
        <header>
        <h1>VIVERO<br/>
         PESCADITO RENGO</h1>
          <nav className="link">
              <a href=""> Inicio </a> 
              <a href=""> Nosotros</a> 
              <a href=""> Productos</a>
              <a href=""> Contacto</a>
              <AiOutlineShoppingCart/>
          </nav>
          
          </header>
    )

}

export default Navbar