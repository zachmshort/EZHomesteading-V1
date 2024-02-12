import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import ProductCard from "../../components/shop/ProductCard";
import { useState, useEffect } from "react";
import "../../styles/components/ShopByCategoryStyles.css";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../../utils/queries";
const categoryProducts = {
  "Highly Perishable": [
    {
      productName: "1-1",
      price: "3.99",
      imageUrl: "image_url_1",
      shelfLife: "7 days",
    },
    {
      productName: "1-2",
      price: "10.99",
      imageUrl: "image_url_2",
      shelfLife: "2 days",
    },
    {
      productName: "1-3",
      price: "5.49",
      imageUrl: "image_url_3",
      shelfLife: "3 days",
    },
    {
      productName: "1-4",
      price: "4.99",
      imageUrl: "image_url_4",
      shelfLife: "4 days",
    },
    {
      productName: "1-5",
      price: "6.49",
      imageUrl: "image_url_5",
      shelfLife: "5 days",
    },
    {
      productName: "1-6",
      price: "7.99",
      imageUrl: "image_url_6",
      shelfLife: "6 days",
    },
    {
      productName: "1-7",
      price: "3.49",
      imageUrl: "image_url_7",
      shelfLife: "7 days",
    },
    {
      productName: "1-8",
      price: "8.99",
      imageUrl: "image_url_8",
      shelfLife: "8 days",
    },
    {
      productName: "1-9",
      price: "12.99",
      imageUrl: "image_url_9",
      shelfLife: "9 days",
    },
  ],
  Perishable: [
    {
      productName: "2-1",
      price: "1.99",
      imageUrl: "image_url_10",
      shelfLife: "1 day",
    },
    {
      productName: "2-2",
      price: "2.49",
      imageUrl: "image_url_11",
      shelfLife: "2 days",
    },
    {
      productName: "2-3",
      price: "3.99",
      imageUrl: "image_url_12",
      shelfLife: "3 days",
    },
    {
      productName: "2-4",
      price: "4.99",
      imageUrl: "image_url_13",
      shelfLife: "4 days",
    },
    {
      productName: "2-5",
      price: "3.49",
      imageUrl: "image_url_14",
      shelfLife: "5 days",
    },
    {
      productName: "2-6",
      price: "5.99",
      imageUrl: "image_url_15",
      shelfLife: "6 days",
    },
    {
      productName: "2-7",
      price: "2.99",
      imageUrl: "image_url_16",
      shelfLife: "7 days",
    },
    {
      productName: "2-8",
      price: "6.49",
      imageUrl: "image_url_17",
      shelfLife: "8 days",
    },
    {
      productName: "2-9",
      price: "4.49",
      imageUrl: "image_url_18",
      shelfLife: "9 days",
    },
  ],
  "Less Perishable": [
    {
      productName: "3-1",
      price: "1.99",
      imageUrl: "image_url_19",
      shelfLife: "1 day",
    },
    {
      productName: "3-2",
      price: "3.99",
      imageUrl: "image_url_20",
      shelfLife: "2 days",
    },
    {
      productName: "3-3",
      price: "3.99",
      imageUrl: "image_url_21",
      shelfLife: "3 days",
    },
    {
      productName: "3-4",
      price: "2.49",
      imageUrl: "image_url_22",
      shelfLife: "4 days",
    },
    {
      productName: "3-5",
      price: "4.99",
      imageUrl: "image_url_23",
      shelfLife: "5 days",
    },
    {
      productName: "3-6",
      price: "5.99",
      imageUrl: "image_url_24",
      shelfLife: "6 days",
    },
    {
      productName: "3-7",
      price: "3.49",
      imageUrl: "image_url_25",
      shelfLife: "7 days",
    },
    {
      productName: "3-8",
      price: "6.99",
      imageUrl: "image_url_26",
      shelfLife: "8 days",
    },
    {
      productName: "3-9",
      price: "7.49",
      imageUrl: "image_url_27",
      shelfLife: "9 days",
    },
  ],
  "Non-Perishable": [
    {
      productName: "4-1",
      price: "1.99",
      imageUrl: "image_url_28",
      shelfLife: "1 day",
    },
    {
      productName: "4-2",
      price: "2.49",
      imageUrl: "image_url_29",
      shelfLife: "2 days",
    },
    {
      productName: "4-3",
      price: "3.99",
      imageUrl: "image_url_30",
      shelfLife: "3 days",
    },
    {
      productName: "4-4",
      price: "5.49",
      imageUrl: "image_url_31",
      shelfLife: "4 days",
    },
    {
      productName: "4-5",
      price: "6.99",
      imageUrl: "image_url_32",
      shelfLife: "5 days",
    },
    {
      productName: "4-6",
      price: "2.99",
      imageUrl: "image_url_33",
      shelfLife: "6 days",
    },
    {
      productName: "4-7",
      price: "3.49",
      imageUrl: "image_url_34",
      shelfLife: "7 days",
    },
    {
      productName: "4-8",
      price: "7.99",
      imageUrl: "image_url_35",
      shelfLife: "8 days",
    },
    {
      productName: "4-9",
      price: "4.99",
      imageUrl: "image_url_36",
      shelfLife: "9 days",
    },
  ],
  "Non-Consumable": [
    {
      productName: "5-1",
      price: "1.99",
      imageUrl: "image_url_37",
      shelfLife: "1 day",
    },
    {
      productName: "5-2",
      price: "2.49",
      imageUrl: "image_url_38",
      shelfLife: "2 days",
    },
    {
      productName: "5-3",
      price: "3.99",
      imageUrl: "image_url_39",
      shelfLife: "3 days",
    },
    {
      productName: "5-4",
      price: "7.49",
      imageUrl: "image_url_40",
      shelfLife: "4 days",
    },
    {
      productName: "5-5",
      price: "5.99",
      imageUrl: "image_url_41",
      shelfLife: "5 days",
    },
    {
      productName: "5-6",
      price: "4.99",
      imageUrl: "image_url_42",
      shelfLife: "6 days",
    },
    {
      productName: "5-7",
      price: "8.99",
      imageUrl: "image_url_43",
      shelfLife: "7 days",
    },
    {
      productName: "5-8",
      price: "6.49",
      imageUrl: "image_url_44",
      shelfLife: "8 days",
    },
    {
      productName: "5-9",
      price: "10.99",
      imageUrl: "image_url_45",
      shelfLife: "9 days",
    },
  ],
  "Self Sufficiency Gear": [
    {
      productName: "6-1",
      price: "1.99",
      imageUrl: "image_url_46",
      shelfLife: "1 day",
    },
    {
      productName: "6-2",
      price: "2.49",
      imageUrl: "image_url_47",
      shelfLife: "2 days",
    },
    {
      productName: "6-3",
      price: "3.99",
      imageUrl: "image_url_48",
      shelfLife: "3 days",
    },
    {
      productName: "6-4",
      price: "12.99",
      imageUrl: "image_url_49",
      shelfLife: "4 days",
    },
    {
      productName: "6-5",
      price: "8.99",
      imageUrl: "image_url_50",
      shelfLife: "5 days",
    },
    {
      productName: "6-6",
      price: "14.99",
      imageUrl: "image_url_51",
      shelfLife: "6 days",
    },
    {
      productName: "6-7",
      price: "19.99",
      imageUrl: "image_url_52",
      shelfLife: "7 days",
    },
    {
      productName: "6-8",
      price: "24.99",
      imageUrl: "image_url_53",
      shelfLife: "8 days",
    },
    {
      productName: "6-9",
      price: "29.99",
      imageUrl: "image_url_54",
      shelfLife: "9 days",
    },
  ],
};

export default function ShopByCategory() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { loading, data } = useQuery(QUERY_ITEMS);
  useEffect(() => {
    console.log(data);
    console.log(loading);
  }, [loading, data]);

  return (
    <>
      <div className="max-w-1/10 m-0">
        <div className="flex max-w-[180px]">
          <div>
            <Popover className="relative isolate z-50">
              <Popover.Button className="ml-2 mb-2 mt-3 inline-flex w-48 justify-center items-center gap-x-1 text-med font-semibold leading-6 text-gray-900 py-3 px-4 rounded-lg shadow-sm bg-white ">
                Shop by Category
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <Popover.Panel className="fixed pb-5 inset-x-0 top-0 z-50 bg-white pt-4 shadow-lg ring-1 ring-gray-900/5">
                  <div className="mx-auto grid max-w-7xl grid-cols-6 gap-2 px-4 sm:grid-cols-6 sm:gap-2 lg:gap-2 lg:px-4 xl:gap-2">
                    {Object.keys(categoryProducts).map((categoryName) => (
                      <div
                        key={categoryName}
                        className={`group relative flex flex-col items-center gap-2 rounded-lg p-2 text-xs leading-5 hover:bg-gray-50 ${
                          selectedCategory === categoryName ? "bg-gray-200" : ""
                        }`}
                        onClick={() => setSelectedCategory(categoryName)}
                      >
                        <div>
                          <a href="#" className="font-semibold text-gray-900">
                            {categoryName}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
        </div>
      </div>
      <div className="cardsContainer grid grid-cols-3 mt-5 px-10 w-3/4 flex">
        {selectedCategory &&
          categoryProducts[selectedCategory].map((product) => (
            <ProductCard
              key={product.productName}
              productName={product.productName}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
              shelfLife={product.shelfLife}
            />
          ))}
      </div>
    </>
  );
}
