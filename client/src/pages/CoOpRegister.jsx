import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConsumerNavBar from "../components/ConsumerNavBar";
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

export default function CoOpRegister() {
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    return isValid;
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    const isValid = validateEmail(email);
    if (!isValid) {
      setEmailError("Not a valid email address.");
    } else {
      setEmailError("");
    }
  };

  //makes register page scrollable on vw smaller than 1600
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1600) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ConsumerNavBar />
      <div className="flex min-h-screen justify-center ">
        <div className="w-full max-w-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register
            </h2>
          </div>
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="string"
                      placeholder="johnsmith123"
                      required
                      className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className={`block w-full rounded-md pl-2 border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${emailError ? 'ring-red-500' : ''}`}
                      placeholder="you@example.com"
                      aria-invalid={emailError ? "true" : "false"}
                      aria-describedby="email-error"
                      onChange={handleEmailChange}
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      {emailError && <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />}
                    </div>
                  </div>
                  {emailError && (
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                      {emailError}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      className="block w-full rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="(555) 987-6543"
                    />
                    
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="address"
                      name="address"
                      type=""
                      autoComplete="current-address"
                      placeholder="Optional"
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
