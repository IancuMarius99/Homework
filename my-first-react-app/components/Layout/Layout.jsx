import './Layout.css';
import { Link } from "react-router-dom";
import { cartCounter } from '../../pages/HomePage/HomePage';

function Layout(props) {
  return (
    <div className='layout'>
      <header>
        <h1>My Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/cart'>Cart {cartCounter} items</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>{cartCounter}</div>
      <main id="app-main-content">
        {props.children}
      </main>
    </div>
  )
}
export default Layout;