import React, { useRef } from "react";
import Link from "next/link";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlineStar,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "../utils/ShopMonitor";
import { urlFor } from "../sanity";
import toast from "react-hot-toast";

const Basket = () => {
  const basketRef = useRef();
  const {
    sumPrice,
    sumQuantities,
    basketUnits,
    setRevealBasket,
    removeUnit,
    basketUnitQuantityToggler,
  } = useStateContext();

  // const handleCheckout = async () => {
  //   const stripe = await getStripe();
  //   const response = await fetch("/api/stripe", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(basketUnits),
  //   });
  //   if (response.statusCode === 500) return;
  //   const data = await response.json();
  //   toast.loading("Redirecting...");
  //   console.log(data);
  //   stripe.redirectToCheckout({ sessionId: data.id });
  // };
  return (
    <div>
      <div>
        <button
          type="button"
          className=""
          onClick={() => setRevealBasket(false)}
        >
          <AiOutlineLeft />
          <span className="">Your Basket</span>
          <span className="">({sumQuantities} units)</span>
        </button>
        {basketUnits.length < 1 && (
          <div className="">
            <AiOutlineShopping size={150} />
            <h3 className="">Your Shopping basket is empty</h3>
            <Link href="/">
              <button
                type="button"
                className=""
                onClick={() => setRevealBasket(false)}
              >
                Continue shopping
              </button>
            </Link>
          </div>
        )}
        <div className="">
          {basketUnits.length >= 1 &&
            basketUnits.map((unit) => (
              <div className="" key={unit._id}>
                <img src={urlFor(unit?.image[0])} className="" />
                <div className="">
                  <div className="">
                    <h5>{unit.name}</h5>
                    <h4>${unit.price}</h4>
                  </div>
                  <div className="">
                    <div>
                      <p className="">
                        <span
                          className=""
                          onClick={() =>
                            basketUnitQuantityToggler(unit._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>

                        <span className="">{unit.quantity}</span>

                        <span
                          className=""
                          onClick={() =>
                            basketUnitQuantityToggler(unit._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <div>
                      <button
                        type="button"
                        className=""
                        onClick={() => removeUnit(unit)}
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {basketUnits.length >= 1 && (
          <div className="">
            <div className="">
              <h3>Subtotal</h3>
              <h3>${sumPrice}</h3>
            </div>
            <div className="">
              {/* <button type="button" className="" onClick={handleCheckout}>
                Pay
              </button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Basket;
