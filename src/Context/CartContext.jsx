import { createContext, useContext, useState, useMemo } from "react";
import { ToastContainer, toast,Slide,Bounce } from 'react-toastify';

const CartContext = createContext();
import { initialProducts } from "../Data/product";

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const products = initialProducts;

  const addCart = (product) => {
    toast.success('Item added to cart!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // remove only ONE quantity
  const removeCart = (product) => {
     toast.success('Item removed to cart!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (!existingItem) return prevCart;

      if (existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        
        
        return prevCart.filter((item) => item.id !== product.id);
      }
    });
  };

  // remove the WHOLE item directly (for X button)
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  const clearCart = () => {
    setCart([]);
  };

  console.log("cart in context", cart);

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addCart,
        removeCart,
        removeItem,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
