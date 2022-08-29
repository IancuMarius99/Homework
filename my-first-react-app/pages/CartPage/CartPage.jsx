import { cartCounter} from "../HomePage/HomePage";

function CartPage() {
    return (
      <div>
        <h2>CartPage</h2>
        <h3> There are: ${cartCounter} items in your Cart</h3>
      </div>
    )
  }
  
  export { CartPage };
  export { cartCounter };