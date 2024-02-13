import React from "react";
import CoOpNavBar from '../../components/navbar/CoOpNavBar';import DropDownButtons from "../../components/shop/DropDownButtons";
import ShopByCategory from "../../components/shop/ShopByCategory";

export default function ShopEZH() {
  return (
    <>
      <CoOpNavBar />
      <ShopByCategory />
      <DropDownButtons />
    </>
  );
}
