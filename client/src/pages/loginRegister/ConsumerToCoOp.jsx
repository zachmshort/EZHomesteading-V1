import { Link } from "react-router-dom";
import CoOpNavBar from "../../components/navbar/CoOpNavBar";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_USER } from "../../utils/mutations";

const ConsumerToCoOp = () => {
    const [formState, setFormState] = useState({
        address:"",
        city:"",
        state:"",
        phone:"",
        userType:"",
      });
      const [updateUser, { error, data }] = useMutation(UPDATE_USER);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      // submit form
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const response = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(response.data.updateUser.token);
        } catch (e) {
          console.error(e);
        }
      };
  return (
    <>
      <CoOpNavBar />
      <div className="flex min-h-screen justify-center ">
        <div className="mt-20 w-full max-w-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Become a Co-Op
            </h2>
          </div>
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            {data ? (
                <p>
                  Congrats! Go check out{" "}
                  <Link to="/co-op-store">your store.</Link>
                </p>
              ) : (
              <form className="space-y-6" method="POST"
              onSubmit={handleFormSubmit}>
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
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6"
                      placeholder="(555) 987-6543"
                        value={formState.username}
                        onChange={handleChange}
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
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6"
                        value={formState.username}
                        onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-4">
                    <div>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6"
                        placeholder="City"
                        value={formState.username}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        id="state"
                        name="state"
                        type="text"
                        autoComplete="address-level1"
                        className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6"
                        placeholder="State"
                        value={formState.username}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                <div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
                  >
                    Become a Co-Op
                  </button>
                </div>
              </form>
              )}
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have a Co-Op Account?{" "}
              <Link
                to="/login"
                className="font-semibold leading-6 text-green-800 hover:text-green-200"
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

export default ConsumerToCoOp