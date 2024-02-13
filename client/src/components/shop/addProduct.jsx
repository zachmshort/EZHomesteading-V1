import { PhotoIcon } from '@heroicons/react/24/solid'

export default function AddProduct() {
  return (
    <>
      <div className="flex justify-left items-center mt-2">
        <form className="w-1/5">
          <div className="border-b border-gray-900/10">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Name
                </label>
                <div className="mt-2">
                  <input
                    type="string"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Tomato"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="mt-2 block w-full pb-2.5 rounded-md border-0 py-1.5 pl-1 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
                  Quantity
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="5"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="unit" className="block text-sm font-medium leading-6 text-gray-900">
                  Unit
                </label>
                <select
                  id="unit"
                  name="unit"
                  className="mt-2 block pb-2.5 w-full rounded-md border-0 py-1.5 pl-1 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue="lb"
                >
                  <option>lb</option>
                  <option>kg</option>
                  <option>bunches</option>
                  <option>none</option>
                </select>
              </div>
              
              <div>
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
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
                  Shelf life in days
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="shelfLife"
                    id="shelfLife"
                    className="block w-full rounded-md pb-1.5 border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="6 days"
                  />
                </div>
              </div>
              </div>
              <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a photo</span>
                      <input id="productPic" name="productPic" type="file" className="sr-only" />
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
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add to Store
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
