import { useEffect, useState } from 'react'
import './HomePage.css'
import productList21 from './produse.json';
// [1,2,3].map(value => value*2) => [2, 4, 6]
const cart = [];
let cartCounter = 0;


const HomePage = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
    //   .then(res => res.json())
    //   .then(json => {
    //     setProductList(json)
    //   })
  }, []) // doar odata se executa
  const onClickToCart = function (addedProduct) {
    console.log("Added to cart produs = ", addedProduct)
    const existProduct = cart.find((cartProduct) => {
      return cartProduct.id === addedProduct.id;
    })
    if (existProduct) {
      existProduct.pices += 1;
      existProduct.price = existProduct.price + existProduct.price;
      cartCounter += 1;
    } else {
      addedProduct.pices = 1;
      addedProduct.price = addedProduct.price;
      cart.push(addedProduct);
      cartCounter += 1;
    }
    console.log('Current cart = ', cart)
    console.log('Total Items = ', cartCounter)
    cart.forEach((element => console.log('Product name:', element.title, 'Product pieces:', element.pices, 'Product price:', element.price)));
  }
  return (
    <>
      <div className="product-list">
        {productList21.map((productObject) => {
          return (
            <div className='product'>
              <h1>{productObject.title}</h1>
              <img src={productObject.image}></img >
              <p>{productObject.price} RON</p>
              <button className='btn' onClick={(_event) => {
                onClickToCart(productObject);
              }}>Add To Cart</button>
            </div>
          )
        })}
      </div>
    </>
  )

}
let modifiedArr = cart.map(function (element) {
  return element.pices;
})
console.log(modifiedArr);
let modifiedArr2 = cart.map(function (element) {
  return element.price;
});
console.log(modifiedArr2);
let modifiedArr3 = cart.map(function (element) {
  return element.title;
});
console.log(modifiedArr3);

export default HomePage;
export { cart };
export { cartCounter };

