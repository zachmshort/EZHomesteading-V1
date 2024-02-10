import { Link } from "react-router-dom";

export default function ShopEZHCategoryDisplay() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <Link to="/shop-ezh">
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Shop EZHomesteading</h2>
            </Link>
            <p className="mt-6 text-lg leading-8 text-gray-600"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ea, atque rem recusandae tempore facilis quos cumque harum accusantium iste?
            </p>
          </div>
        </div>
      </div>
    )
  }
  