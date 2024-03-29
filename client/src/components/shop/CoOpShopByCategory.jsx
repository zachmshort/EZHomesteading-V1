import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import "../../styles/components/ShopByCategoryStyles.css";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../../utils/queries";

let dataConvenience;
let categoryArray = [];

export default function ShopByCategory() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { loading, data } = useQuery(QUERY_ITEMS);
  useEffect(() => {
    console.log(loading);

    if (!loading) {
      dataConvenience = data?.Items || {};
      dataConvenience.map((data) => {
        categoryArray.push(data.category);
      });
      categoryArray = [...new Set(categoryArray)];
    }
  }, [loading, data]);

  if (dataConvenience) {
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
                      {categoryArray.map((category) => (
                        <div
                          key={category}
                          className={`group relative flex flex-col items-center gap-2 rounded-lg p-2 text-xs leading-5 hover:bg-gray-50 ${
                            selectedCategory === category ? "bg-gray-200" : ""
                          }`}
                        >
                          <div>
                            <a
                              href="#"
                              className="font-semibold text-gray-900"
                              onClick={() => {
                                setSelectedCategory(category);
                              }}
                            >
                              {category}
                            </a>
                          </div>
                        </div>
                      ))}
                      <div className="group relative flex flex-col items-center gap-2 rounded-lg p-2 text-xs leading-5 hover:bg-gray-50">
                        <a
                          href="#"
                          className="font-semibold text-gray-900"
                          onClick={() => {
                            setSelectedCategory(null);
                          }}
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
          </div>
        </div>
        <div className="cardsContainer grid grid-cols-3 mt-5 px-10 w-3/4 flex">
          {dataConvenience.map((product) => {
            if (!selectedCategory) {
              return (
                <ProductCard
                  key={product.name}
                  productName={product.name}
                  price={product.price}
                  imageUrl={product.productPic}
                  shelfLife={product.shelfLife}
                />
              );
            }
            if (product.category === selectedCategory) {
              return (
                <ProductCard
                  key={product.name}
                  productName={product.name}
                  price={product.price}
                  imageUrl={product.productPic}
                  shelfLife={product.shelfLife}
                />
              );
            }
          })}
        </div>
      </>
    );
  }
}
