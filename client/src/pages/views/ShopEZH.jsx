import React from "react";
import ConsumerNavBar from "../../components/navbar/ConsumerNavBar";
import DropDownButtons from "../../components/shop/DropDownButtons";
import ShopByCategory from "../../components/shop/ShopByCategory";

export default function ShopEZH() {
  return (
    <>
      <ConsumerNavBar />
      <ShopByCategory />
      <DropDownButtons />
    </>
  );
}
