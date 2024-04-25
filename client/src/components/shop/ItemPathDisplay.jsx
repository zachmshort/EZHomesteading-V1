import React from "react";

const categories = [
  "Highly Perishable",
  "Perishable",
  "Less Perishable",
  "Non-Perishable",
  "Non-Consumable",
  "Self Sufficiency",
];
const subcategories = [
  ["Subcategory 1-1", "Subcategory 1-2", "Subcategory 1-3"],
  ["Subcategory 2-1", "Subcategory 2-2", "Subcategory 2-3", "Subcategory 2-4"],
  ["Subcategory 3-1"],
  [
    "Subcategory 4-1",
    "Subcategory 4-2",
    "Subcategory 4-3",
    "Subcategory 4-4",
    "Subcategory 4-5",
  ],
  ["Subcategory 5-1", "Subcategory 5-2", "Subcategory 5-3"],
  ["Subcategory 6-1", "Subcategory 6-2", "Subcategory 6-3", "Subcategory 6-4"],
];

const items = [
  [
    ["Item 1-1-1", "Item 1-1-2", "Item 1-1-3"],
    ["Item 1-2-1", "Item 1-2-2", "Item 1-2-3", "Item 1-2-4"],
    ["Item 1-3-1"],
  ],
  [
    ["Item 2-1-1", "Item 2-1-2", "Item 2-1-3", "Item 2-1-4"],
    ["Item 2-2-1", "Item 2-2-2", "Item 2-2-3"],
    ["Item 2-3-1"],
  ],
  [["Item 3-1-1", "Item 3-1-2", "Item 3-1-3"]],
  [
    ["Item 4-1-1", "Item 4-1-2", "Item 4-1-3", "Item 4-1-4"],
    ["Item 4-2-1", "Item 4-2-2", "Item 4-2-3", "Item 4-2-4"],
    ["Item 4-3-1"],
  ],
  [
    ["Item 5-1-1", "Item 5-1-2", "Item 5-1-3"],
    ["Item 5-2-1", "Item 5-2-2", "Item 5-2-3"],
    ["Item 5-3-1"],
  ],
  [
    ["Item 6-1-1", "Item 6-1-2", "Item 6-1-3"],
    ["Item 6-2-1", "Item 6-2-2", "Item 6-2-3"],
    ["Item 6-3-1", "Item 6-3-2"],
  ],
];

export default function ItemPath({
  selectedCategoryIndex,
  selectedSubcategoryIndex,
  selectedItemIndex,
  items,
}) {
  const renderCategoryView = () => {
    if (
      selectedCategoryIndex !== null &&
      selectedCategoryIndex !== -1 &&
      selectedSubcategoryIndex !== null &&
      selectedSubcategoryIndex !== -1 &&
      selectedItemIndex !== null &&
      selectedItemIndex !== -1
    ) {
      const selectedCategory = categories[selectedCategoryIndex];
      const selectedSubcategory = categorySubcategories[selectedCategory]
        ? categorySubcategories[selectedCategory][selectedSubcategoryIndex]
        : null;
      const selectedItem =
        selectedSubcategory &&
        items[selectedCategoryIndex] &&
        items[selectedCategoryIndex][selectedSubcategoryIndex]
          ? items[selectedCategoryIndex][selectedSubcategoryIndex][
              selectedItemIndex
            ]
          : null;
      if (selectedCategory && selectedSubcategory && selectedItem) {
        return (
          <div>
            <h4 className="text-4xl tracking-tight text-gray-900 sm:text-6xl">
              {selectedCategory} - {selectedSubcategory} - {selectedItem}{" "}
              {/* Display full path */}
            </h4>
          </div>
        );
      }
    } else {
      // If no item is selected, render category and subcategory options
      return (
        <div>
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h4 className="text-4xl tracking-tight text-gray-900 sm:text-6xl">
                {category}
              </h4>
              {categorySubcategories[category].map(
                (subcategory, subcategoryIndex) => (
                  <p key={subcategoryIndex}>{subcategory}</p>
                )
              )}
            </div>
          ))}
        </div>
      );
    }
  };

  return renderCategoryView();
}
