import React, { useState } from 'react';
import ConsumerNavBar from '../components/ConsumerNavBar';

//constants for categories, sub cats, and products in sub cats
const categories = ['Highly Perishable', 'Perishable', 'Less Perishable', 'Non-Perishable', 'Non-Consumable', 'Self Sufficiency'];
const subcategories = Array.from({ length: 6 }, (_, i) => [`Subcategory ${i + 1}-1`, `Subcategory ${i + 1}-2`, `Subcategory ${i + 1}-3`, `Subcategory ${i + 1}-4`, `Subcategory ${i + 1}-5`, `Subcategory ${i + 1}-6`]);
const items = Array.from({ length: 6 }, (_, i) => Array.from({ length: 6 }, (_, j) => [`Item ${i + 1}-${j + 1}-1`, `Item ${i + 1}-${j + 1}-2`, `Item ${i + 1}-${j + 1}-3`, `Item ${i + 1}-${j + 1}-4`, `Item ${i + 1}-${j + 1}-5`, `Item ${i + 1}-${j + 1}-6`]));

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