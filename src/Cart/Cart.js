import React from "react";
import features from "../features.json";
import Total from "../Total/Total";

import CartItem from "../Summary/Summary";

export default function Cart(props) {
  
  return ( 
    <>
      <CartItem features = { features } {...props} />  
      <Total features = { features } {...props} />
    </>
  );
};
