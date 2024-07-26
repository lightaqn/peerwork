import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useStateContext } from "../../utils/ShopMonitor";
import React, { useState, useEffect } from "react";

const success = () => {
  const { setBasketUnits, setSumPrice, setSumQuantities } = useStateContext();
  const [order, setOrder] = useState(null);
  useEffect(() => {
    localStorage.clear();
    setBasketUnits([]);
    setSumPrice(0);
    setSumQuantities(0);
  }, []);

  return (
    <div className="">
      <div className="">
        <p className="">
          <ShoppingCartIcon />
        </p>
        <h2 className=""> Congrats on placing your order! </h2>
        <p className="">Check your email</p>
        <p className="">
          Contact us via email for any inquiry
          <a className="" href="mailto:order@hustloo.com">
            order@hustloo.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="" width="300px">
            {" "}
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;
