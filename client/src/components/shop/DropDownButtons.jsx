import React, { useState } from 'react';
// import ItemPathDisplay from '../..components/ItemPathDisplay';

const categories = ['Highly Perishable', 'Perishable', 'Less Perishable', 'Non-Perishable', 'Non-Consumable', 'Self Sufficiency'];
const subcategories = [
  ['Subcategory 1-1', 'Subcategory 1-2', 'Subcategory 1-3'],
  ['Subcategory 2-1', 'Subcategory 2-2', 'Subcategory 2-3', 'Subcategory 2-4'],
  ['Subcategory 3-1'],
  ['Subcategory 4-1', 'Subcategory 4-2', 'Subcategory 4-3', 'Subcategory 4-4', 'Subcategory 4-5'],
  ['Subcategory 5-1', 'Subcategory 5-2', 'Subcategory 5-3'],
  ['Subcategory 6-1', 'Subcategory 6-2', 'Subcategory 6-3', 'Subcategory 6-4']
];

const items = [
  [
    ['Item 1-1-1', 'Item 1-1-2', 'Item 1-1-3'],
    ['Item 1-2-1', 'Item 1-2-2', 'Item 1-2-3', 'Item 1-2-4'],
    ['Item 1-3-1']
  ],
  [
    ['Item 2-1-1', 'Item 2-1-2', 'Item 2-1-3', 'Item 2-1-4'],
    ['Item 2-2-1', 'Item 2-2-2', 'Item 2-2-3'],
    ['Item 2-3-1']
  ],
  [
    ['Item 3-1-1', 'Item 3-1-2', 'Item 3-1-3']
  ],
  [
    ['Item 4-1-1', 'Item 4-1-2', 'Item 4-1-3', 'Item 4-1-4'],
    ['Item 4-2-1', 'Item 4-2-2', 'Item 4-2-3', 'Item 4-2-4'],
    ['Item 4-3-1']
  ],
  [
    ['Item 5-1-1', 'Item 5-1-2', 'Item 5-1-3'],
    ['Item 5-2-1', 'Item 5-2-2', 'Item 5-2-3'],
    ['Item 5-3-1']
  ],
  [
    ['Item 6-1-1', 'Item 6-1-2', 'Item 6-1-3'],
    ['Item 6-2-1', 'Item 6-2-2', 'Item 6-2-3'],
    ['Item 6-3-1', 'Item 6-3-2']
  ]
];

export default function DropDownButtons() {
  const [selectedCategory, setSelectedCategory] = useState(new Array(categories.length).fill(null));
  const [selectedSubcategory, setSelectedSubcategory] = useState(new Array(categories.length).fill(null));
  const [selectedItem, setSelectedItem] = useState(new Array(categories.length).fill(null));
  const [showSubcategoryOptions, setShowSubcategoryOptions] = useState(new Array(categories.length).fill(false));
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1); // Track selected item index

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

  // handler for item selection
  const handleItemClick = (categoryIndex, subcategoryIndex, itemIndex) => {
    setSelectedItemIndex(itemIndex); // Update selected item index
  };

  return (
    <>
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
                          <button key={itemIndex} onClick={() => handleItemClick(index, selectedSubcategory[index], itemIndex)} className={`w-full px-4 py-2 text-left text-sm ${selectedItemIndex === itemIndex ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>{item}</button>
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
