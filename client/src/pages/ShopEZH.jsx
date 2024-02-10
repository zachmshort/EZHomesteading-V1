import React, { useState } from 'react';
import ConsumerNavBar from '../components/ConsumerNavBar';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon } from '@heroicons/react/24/outline'
// import ShopEZHCategoryDisplay from '../components/ShopEZHCategoryDisplay';

//constants for categories, sub cats, and products in sub cats
const categories = ['Highly Perishable', 'Perishable', 'Less Perishable', 'Non-Perishable', 'Non-Consumable', 'Self Sufficiency'];
const subcategories = Array.from({ length: 6 }, (_, i) => [`Subcategory ${i + 1}-1`, `Subcategory ${i + 1}-2`, `Subcategory ${i + 1}-3`, `Subcategory ${i + 1}-4`, `Subcategory ${i + 1}-5`, `Subcategory ${i + 1}-6`]);
const items = Array.from({ length: 6 }, (_, i) => Array.from({ length: 6 }, (_, j) => [`Item ${i + 1}-${j + 1}-1`, `Item ${i + 1}-${j + 1}-2`, `Item ${i + 1}-${j + 1}-3`, `Item ${i + 1}-${j + 1}-4`, `Item ${i + 1}-${j + 1}-5`, `Item ${i + 1}-${j + 1}-6`]));

const categorySelect = [
  {
    name: 'Highly Perishable',
    description: 'Get a better understanding of where your traffic is coming from',
    href: '#',
    // icon: ChartPieIcon,
  },
  {
    name: 'Perishable',
    description: 'Speak directly to your customers with our engagement tool',
    href: '#',
    // icon: CursorArrowRaysIcon,
  },
  { 
    name: 'Less Perishable', 
    description: "Your customers' data will be safe and secure", 
    href: '#', 
    // icon: FingerPrintIcon
  },
  {
    name: 'Non-Perishable',
    description: "Connect with third-party tools that you're already using",
    href: '#',
    // icon: SquaresPlusIcon,
  },
  {
    name: 'Non-Consumable',
    description: "Connect with third-party tools that you're already using",
    href: '#',
    // icon: SquaresPlusIcon,
  },
  {
    name: 'Self Sufficiency',
    description: "Connect with third-party tools that you're already using",
    href: '#',
    // icon: SquaresPlusIcon,
  },
]

export default function ShopEZH() {

  // variables for selected category, subcategory, product, and subcategory options visibility
  const [selectedCategory, setSelectedCategory] = useState(new Array(categories.length).fill(null));
  const [selectedSubcategory, setSelectedSubcategory] = useState(new Array(categories.length).fill(null));
  const [selectedItem, setSelectedItem] = useState(new Array(categories.length).fill(null));
  const [showSubcategoryOptions, setShowSubcategoryOptions] = useState(new Array(categories.length).fill(false));

  // handler for category selection
  const handleCategoryClick = (index) => {
    const newSelectedCategory = [...selectedCategory];
    newSelectedCategory[index] = newSelectedCategory[index] === index ? null : index;
    setSelectedCategory(newSelectedCategory);

  // Reset subcategory and item when category changes
  const newSelectedSubcategory = [...selectedSubcategory];
  newSelectedSubcategory[index] = null; 
  setSelectedSubcategory(newSelectedSubcategory);

  const newSelectedItem = [...selectedItem];
  newSelectedItem[index] = null; 
  setSelectedItem(newSelectedItem);

  // turn visibility off and on for subcategory options
  const newShowSubcategoryOptions = [...showSubcategoryOptions];
  newShowSubcategoryOptions[index] = !newShowSubcategoryOptions[index];
  setShowSubcategoryOptions(newShowSubcategoryOptions);
};

  // handler for subcategory selection
  const handleSubcategoryClick = (categoryIndex, subcategoryIndex) => {
  const newSelectedSubcategory = [...selectedSubcategory];
  newSelectedSubcategory[categoryIndex] = newSelectedSubcategory[categoryIndex] === subcategoryIndex ? null : subcategoryIndex;
  setSelectedSubcategory(newSelectedSubcategory);

  // resets the items viewed when subcategory changes
  const newSelectedItem = [...selectedItem];
  newSelectedItem[categoryIndex] = null; 
  setSelectedItem(newSelectedItem);
  };

  // handler for item selection, needs to change modify card component, coming soon
  const handleItemClick = (categoryIndex, subcategoryIndex, itemIndex) => {
    const newSelectedItem = [...selectedItem];
    newSelectedItem[categoryIndex] = newSelectedItem[categoryIndex] === itemIndex ? null : itemIndex;
    setSelectedItem(newSelectedItem);
  };

  return (
    <>
      <ConsumerNavBar />
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
          <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-4 shadow-lg ring-1 ring-gray-900/5">
            <div className="mx-auto grid max-w-7xl grid-cols-6 gap-2 px-4 sm:grid-cols-6 sm:gap-2 lg:gap-2 lg:px-4 xl:gap-2">
              {categorySelect.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex flex-col items-center gap-2 rounded-lg p-2 text-xs leading-5 hover:bg-gray-50"
                >
                  {/* <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-5 w-5 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div> */}
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      {categories.map((category, index) => (
        // z index formatting makes sure items appear above sub-cats, and sub cats above major categories
        <div key={index} style={{ position: 'relative', zIndex: categories.length - index }}> 
          <div className="relative inline-block">
            <div className="flex-none p-2">
              <button onClick={() => handleCategoryClick(index)} className="w-48 px-2 py-2 text-gray-700 bg-white border-2 border-white rounded-md shadow focus:outline-none focus:border-blue-600" style={{ zIndex: categories.length - index }}>
                <span className="select-none">{category}</span>
                <span className={showSubcategoryOptions[index] ? "w-6 h-6 stroke-current transform rotate-180" : "w-6 h-6 stroke-current"} />
              </button>
              {showSubcategoryOptions[index] && (
                <div className="absolute left-1.75 mt-2 w-48 bg-white rounded-lg shadow-xl" style={{ zIndex: categories.length }}>
                  <div className="py-1">
                    {subcategories[index].map((subcategory, subIndex) => (
                      <button key={subIndex} onClick={() => handleSubcategoryClick(index, subIndex)} className={`w-48 px-4 py-2 text-left text-sm ${selectedSubcategory[index] === subIndex ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>{subcategory}</button>
                    ))}
                  </div>
                  {selectedSubcategory[index] !== null && (
                    <div className="absolute left-48 top-0 ml-2 mt-0 w-48 bg-white rounded-lg shadow-xl" style={{ zIndex: categories.length }}>
                      <div className="py-1">
                        {items[index][selectedSubcategory[index]].map((item, itemIndex) => (
                          <button key={itemIndex} onClick={() => handleItemClick(index, selectedSubcategory[index], itemIndex)} className={`w-full px-4 py-2 text-left text-sm ${selectedItem[index] === itemIndex ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>{item}</button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}