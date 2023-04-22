import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({});

export function useCart() {
  return useContext(CartContext);
}

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartProducts(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const addProduct = (productID) => {
    setCartProducts((prev) => [...prev, productID]);
  };

  const removeProduct = (productID) => {
    const index = cartProducts.indexOf(productID);
    if (index !== -1) {
      const newCartProducts = [...cartProducts];
      newCartProducts.splice(index, 1);
      setCartProducts(newCartProducts);
    }
  };

  const values = {
    cartProducts,
    setCartProducts,
    addProduct,
    removeProduct,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
