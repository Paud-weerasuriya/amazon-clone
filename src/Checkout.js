import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/supper-sale-banner-ad-for-shoes-offre-design-template-263b3813e52a6a6eb85fa45fd49ca3b4_screen.jpg?ts=1625994393"
          alt=""
        />
        <h3>Hello, {user?.email}</h3>
        <h2 className="checkout_title">Your Shopping Basket</h2>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
