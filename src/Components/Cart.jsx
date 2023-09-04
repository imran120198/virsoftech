import React from "react";
import styles from "../Styles/Cart.module.css";

const Cart = ({products}) => {
    console.log(products)
  return (
    <div className={styles.cartContainer}>
      <p>My Cart</p>
      {products.map((elem) => {
        return (
            <div>
                <p>{elem.name}</p>
            </div>
        )
      })}
    </div>
  );
};

export default Cart;
