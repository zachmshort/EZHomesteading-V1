import { PhotoIcon } from '@heroicons/react/24/solid';
import CoOpNavBar from '../../components/navbar/CoOpNavBar';
import { useState } from 'react';
// import { useAuth } from '../../utils/auth'; ????
import { useMutation } from '@apollo/client';
import { ADD_NEW_ITEM } from "../../utils/mutations";

//////////////////////////////////////////////
// pseudo code
// need to bring in correct mutation so when data is collected
// it can be posted (probably not right way to say it)
// store everything in a data variable
// wait for all the required fields to be submitted
// upon user clicking add product...
// append data to all items and associate it with the correct 
// userID (probably not right way to say it)
//////////////////////////////////////////////

const AddProduct = () => {

// https://legacy.reactjs.org/docs/hooks-reference.html
// const [stateVariable, setStateFunction] = useState(initialState);
// Returns a stateful value, and a function to update it.
// During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).
// The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.

  const[name, setName] = useState('');
  const[category, setCategory] = useState('');
  const[quantityType, setQuantityType] = useState('');
  const[stock, setStock] = useState('');
  const[productPic, setProductPic] = useState('');
  const[shelfLife, setshelfLife] = useState('');
  const[price, setPrice] = useState('');


  const [addNewProduct] = useMutation(ADD_NEW_ITEM)

  const handleAddProductSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addNewProduct ({
        variables: {
          name: name,
          category: category,
          quantityType: quantityType,
          stock: stock,
          productPic: productPic,
          shelfLife: shelfLife,
          price: price,
        }
      });
      console.log('New product added', data.addNewProduct)
    } catch (error) {
      console.log('couldnt add product', error)
    }
  }

  return (
    <>
      <CoOpNavBar />
      <div className="flex justify-center mt-5 items-center mt-2">
        <form onSubmit={handleAddProductSubmit} className="w-1/3 mt-5">
          <div className="border-b m-1 border-gray-900/10">
            <div className="grid grid-cols-2 gap-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Name
                </label>
                <div className="mt-2">
                  <input
                    type="string"
                    name="name"
                    id="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    placeholder="Tomato"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  className="mt-2 block w-full pb-2.5 rounded-md border-0 py-1.5 pl-1 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
                  defaultValue="Vegetable"
                >
                  <option>Fruit</option>
                  <option>Vegetable</option>
                  <option>Grain</option>
                  <option>Homemade Product</option>
                  <option>Chicken</option>
                  <option>Dairy</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="stock" className="block text-sm font-medium leading-6 text-gray-900">
                  Quantity
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="stock"
                    id="stock"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    placeholder="5"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="quantityType" className="block text-sm font-medium leading-6 text-gray-900">
                  Unit
                </label>
                <select
                  id="quantityType"
                  name="quantityType"
                  required
                  className="mt-2 block pb-2.5 w-full rounded-md border-0 py-1.5 pl-1 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
                  defaultValue="lb"
                >
                  <option>lb</option>
                  <option>kg</option>
                  <option>bunches</option>
                  <option>none</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                  Price
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    placeholder="1"
                    aria-describedby="price-currency"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-500 sm:text-sm" id="price-currency">
                      USD
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="shelfLife" className="block text-sm font-medium leading-6 text-gray-900">
                  Shelf life in days
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="shelfLife"
                    id="shelfLife"
                    required
                    className="block w-full rounded-md pb-1.5 border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    placeholder="6 days"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:text-green-500"
                >
                  <span>Upload a photo</span>
                  <input id="productPic" name="productPic" type="file" className="sr-only" 
                  accept="image/png, image/jpeg"/> 
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
            </div>
          </div>
          <div className="mt-6 mb-20 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Add to Store
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
