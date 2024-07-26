import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export const ShopContext = React.createContext();

const ShopMonitor = ({ children }) => {
  const [revealBasket, setRevealBasket] = useState(false);
  const [basketUnits, setBasketUnits] = useState([]);
  const [sumPrice, setSumPrice] = useState(0);
  const [sumQuantities, setSumQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const addUnit = (product, quantity) => {
    const checkProductInBasket = basketUnits.find(
      (unit) => unit._id === product._id
    );

    setSumPrice((prevSumPrice) => prevSumPrice + product.price * quantity);
    setSumQuantities((prevSumQuantities) => prevSumQuantities + quantity);
    if (checkProductInBasket) {
      const updatedBasketUnit = basketUnits.map((basketProduct) => {
        if (basketProduct._id === product._id)
          return {
            ...basketProduct,
            quantity: basketProduct.quantity + quantity,
          };
      });
      setBasketUnits(updatedBasketUnit);
    } else {
      product.quantity = quantity;
      setBasketUnits([...basketUnits, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to basket`);
  };

  const removeUnit = (product) => {
    foundProduct = basketUnits.find((unit) => unit._id === product._id);
    const newBasketUnits = basketUnits.filter(
      (unit) => unit._id !== product._id
    );

    setSumPrice(
      (prevSumPrice) =>
        prevSumPrice - foundProduct.price * foundProduct.quantity
    );
    setSumQuantities(
      (prevSumQuantities) => prevSumQuantities - foundProduct.quantity
    );

    setBasketUnits(newBasketUnits);
  };

  const basketUnitQuantityToggler = (id, value) => {
    foundProduct = basketUnits.find((unit) => unit._id === id);
    index = basketUnits.findIndex((product) => product._id === id);
    const newBasketUnits = basketUnits.filter((unit) => unit._id !== id);
    if (value === "inc") {
      setBasketUnits([
        ...newBasketUnits,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setSumPrice((prevSumPrice) => prevSumPrice + foundProduct.price);
      setSumQuantities((prevSumQuantities) => prevSumQuantities + 1);
    } else if ((value = "dec")) {
      if (foundProduct.quantity > 1) {
        setBasketUnits([
          ...newBasketUnits,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setSumPrice((prevSumPrice) => prevSumPrice - foundProduct.price);
        setSumQuantities((prevSumQuantities) => prevSumQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <ShopContext.Provider
      value={{
        revealBasket,
        setRevealBasket,
        basketUnits,
        sumPrice,
        sumQuantities,
        qty,
        incQty,
        decQty,
        addUnit,
        removeUnit,
        setBasketUnits,
        setSumPrice,
        setSumQuantities,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopMonitor;

export const useStateContext = () => useContext(ShopContext);
