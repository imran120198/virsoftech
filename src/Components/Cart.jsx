import React from "react";
import styles from "../Styles/Cart.module.css";

const Cart = ({products}) => {
    console.log(products)
  return (
    <div className={styles.cartContainer}>
      <p>My Cart</p>
    </div>
  );
};

export default Cart;
