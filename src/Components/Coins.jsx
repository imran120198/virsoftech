import React, { useState } from "react";
import styles from "../Styles/Coins.module.css";
import Cart from "./Cart";

const Coins = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState(0);

  const data = [
    {
      coins: "BTS",
      price: 25000,
    },
    {
      coins: "DOGE",
      price: 0.75,
    },
    { coins: "RIPPLE", price: 1.5 },
  ];

  const addData = () => {
    const newProduct = {
      name,
      price,
      quantity,
    };

    setProducts([...products, newProduct]);
    setTotal(total + newProduct.price * newProduct.quantity);
  };

  return (
    <div className={styles.container}>
      {data.map((elem) => {
        return (
          <div className={styles.dataContainer}>
            <div className={styles.firstSection}>
              <p value={name} onChange={(e) => setName(e.target.value)}>
                {elem.coins}
              </p>
              <p value={price} onChange={(e) => setPrice(e.target.value)}>
                ${elem.price}
              </p>
            </div>
            <div>
              <input
                placeholder="QTY"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div>
              <button onClick={addData}>ADD</button>
            </div>
          </div>
        );
      })}
      <Cart products={products} />
    </div>
  );
};

export default Coins;
