import HomeNavBar from "../../components/navbar/HomeNavBar";
// import ConsumerNavBar from '../../components/navbar/ConsumerNavBar';
import React, { useState } from "react";
import "../../styles/App.css";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Highly Perishable",
    href: "/shop-ezh",
    imageSrc: "/images/home-images/milk.jpg",
  },
  {
    name: "Perishable",
    href: "/shop-ezh",
    imageSrc: "/images/home-images/apple.jpg",
  },
  {
    name: "Less Perishable",
    href: "/shop-ezh",
    imageSrc: "/images/home-images/potato.jpg",
  },
  {
    name: "Non-Perishable",
    href: "/shop-ezh",
    imageSrc: "/images/home-images/honey.jpg",
  },
  {
    name: "Non-Consumable",
    href: "/shop-ezh",
    imageSrc: "/images/home-images/candle.jpg",
  },
];

const collections = [
  {
    name: "",
    href: "/",
    imageSrc: "/images/how-ezh-works/how-ezh-works-1.jpg",
    imageAlt: "",
    description:
      "This is Edward. He is a hard-working electritian, but ever since he was a child he has loved growing tomatoes. But he always has too many at the end of a harvest for just himself!",
  },
  {
    name: "",
    href: "/",
    imageSrc: "/images/how-ezh-works/how-ezh-works-2.jpg",
    imageAlt: "",
    description:
      "Instead of letting those fresh organic tomatoes go to waste, Edward uses EZ Homesteading to list hs excess tomatoes for sale.",
  },
  {
    name: "",
    href: "/",
    imageSrc: "/images/how-ezh-works/how-ezh-works-3.jpg",
    imageAlt: "",
    description:
      "Edward puts his tomatoes that he has sold on EZ Homesteading out for his consumers to come by and pick up.",
  },
  {
    name: "",
    href: "/",
    imageSrc: "/images/how-ezh-works/how-ezh-works-4.jpg",
    imageAlt: "",
    description:
      "This is Bella, she is having a dinner party soon and would love some truly organic fresh tomatoes, but doesnt have the time to grow them herself. So she goes on EZ Homesteading and discovers Edwards Co-Op is right around the corner!",
  },
  {
    name: "",
    href: "/",
    imageSrc: "/images/how-ezh-works/how-ezh-works-5.jpg",
    imageAlt: "",
    description:
      "Edward and Bella agree on a price, and Bella swings by Edwards Co-Op on the way home from work! They never have to see eachother or exchange cash if they do not want to.",
  },
  {
    name: "",
    href: "/",
    imageSrc: "/images/how-ezh-works/how-ezh-works-6.jpg",
    imageAlt: "",
    description:
      "Both Edward and Bella are thrilled! Edward made money instead of letting his excess tomatoes go to waste. And Bella got truly fresh organic tomatoes grown by a gardener who cares about how his produce is grown.",
  },
];

const footerNavigation = {
  shop: [
    { name: "Highly Perishable", href: "/shop-ezh" },
    { name: "Perishable", href: "/shop-ezh" },
    { name: "Less Perishable", href: "/shop-ezh" },
    { name: "Non-Perishable", href: "/shop-ezh" },
    { name: "Non-Consumable", href: "/shop-ezh" },
  ],
  company: [
    { name: "Who we are", href: "/profile" },
    { name: "How EZH Works", href: "/profile" },
    { name: "Terms & Conditions", href: "/profile" },
    { name: "Privacy", href: "/profile" },
    { name: "Don't Click Here", href: "/cow" },
  ],
  account: [
    { name: "Manage Account", href: "/profile-settings" },
    { name: "Returns & Exchanges", href: "/profile" },
    { name: "Redeem a Gift Card", href: "/profile" },
  ],
  connect: [
    { name: "Contact Us", href: "/profile" },
    { name: "Facebook", href: "/profile" },
    { name: "Instagram", href: "/profile" },
    { name: "Pinterest", href: "/profile" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function StaticHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <HomeNavBar />

      {/* Hero section */}
      <div className="relative h-screen">
        {/* Decorative image and overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gray-900 opacity-50" />
          <img
            src="/images/home-images/ezh-home-static-bg.jpg"
            alt="Man Holding "
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-20"
        />

        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Top navigation */}
            <div className="bg-gray-900"></div>

            {/* Secondary navigation */}
          </nav>
        </header>

        <div className="relative mx-auto flex max-w-3xl flex-col items-start px-6 py-32 text-start sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl Fresh">
            Fresh, Local, Organic
          </h1>
          <h1 className="text-4xl font-bold mt-1 tracking-tight lg:text-6xl Produce">
            Produce Made Simple
          </h1>
          <p className="mt-4 text-xl text-white">
            EZ Homesteading connects family scale farmers & gardeners with
            people in their community.
          </p>
          <Link
            to="/shop-ezh"
            className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Find Produce Near Me
          </Link>
        </div>
      </div>

      <main>
        {/* Category section */}
        <section
          aria-labelledby="category-heading"
          className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
        >
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2
              id="category-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Find Produce by Category
            </h2>
            <Link
              to="/shop-ezh"
              className="hidden text-sm font-semibold text-green-600 hover:text-green-500 sm:block"
            >
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img
                          src={category.imageSrc}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">
                        {category.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-4 sm:hidden"></div>
        </section>

        {/* Featured section */}
        <section
          aria-labelledby="social-impact-heading"
          className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                src="/images/home-images/become-a-co-op.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2
                  id="social-impact-heading"
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  <span className="block sm:inline">Become a </span>
                  <span className="block sm:inline">Co-Op</span>
                </h2>
                <p className="mt-3 text-xl text-white">
                  Grow or source, and then start selling. No monthly subscrition
                  or hidden fees.
                </p>
                <Link
                  to="/co-op-register"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Register as a Co-Op
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Collection section */}
        <section
          aria-labelledby="collection-heading"
          className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
        >
          <h2
            id="collection-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            How EZH Works
          </h2>
          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {collections.map((collection) => (
              <Link
                to={collection.href}
                className="group block cursor-auto mb-4 mr-4"
              >
                <div
                  aria-hidden="true"
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5"
                >
                  <img
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {collection.name}
                </h3>
                <p className="mt-2 mb-2 text-sm text-gray-500">
                  {collection.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured section */}
      </main>

      <footer aria-labelledby="footer-heading" className="bg-gray-900">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-white">Shop</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.shop.map((item) => (
                      <li key={item.name} className="text-sm">
                        <Link
                          to={item.href}
                          className="text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name} className="text-sm">
                        <Link
                          to={item.href}
                          className="text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-white">Account</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.account.map((item) => (
                      <li key={item.name} className="text-sm">
                        <Link
                          to={item.href}
                          className="text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Connect</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.connect.map((item) => (
                      <li key={item.name} className="text-sm">
                        <Link
                          to={item.href}
                          className="text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-16 xl:mt-0">
              <h3 className="text-sm font-medium text-white">
                Sign up for our newsletter
              </h3>
              <p className="mt-6 text-sm text-gray-300">
                Get updates on popular produce in your area and more.
              </p>
              <form className="mt-2 flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border border-white bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                />
                <div className="ml-4 flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 py-10">
            <p className="text-sm text-gray-400">
              Copyright &copy; 2024 EZ Homesteading All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
