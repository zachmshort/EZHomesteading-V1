import { Link } from 'react-router-dom';
import ConsumerNavBar from '../components/ConsumerNavBar';

export default function ChooseRole() {
  return (
    <>
      <ConsumerNavBar />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center"> 
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl whitespace-nowrap mb-8">How would you like to use EZH?</h2> 
          <ul
            role="list" className="flex flex-wrap justify-center items-center">
            <Link to="/consumer-registration">
              <li className="relative w-72 h-72 m-4 flex justify-center items-center">
                <div className="aspect-h-7 aspect-w-10 block overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <div className="h-0">
                    <img
                      src='/images/consumer.jpg'
                      alt="Consumer Role"
                      className="pointer-events-none object-cover group-hover:opacity-75 absolute inset-0 w-full h-full rounded-lg" 
                    />
                  </div>
                </div>
              </li>
              </Link>
              <Link to="/co-op-registration">
              <li className="relative w-72 h-72 m-4 flex justify-center items-center">
                <div className="aspect-h-7 aspect-w-10 block overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <div className="h-0">
                    <img
                      src='/images/co-op.jpg'
                      alt="Co-Op Role"
                      className="pointer-events-none object-cover group-hover:opacity-75 absolute inset-0 w-full h-full rounded-lg" 
                    />
                  </div>
                </div>
              </li>
              </Link>
              <Link to="/producer-registration">
              <li className="relative w-72 h-72 m-4 flex justify-center items-center">
                <div className="aspect-h-7 aspect-w-10 block overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <div className="h-0">
                    <img
                      src='/images/producer.jpg'
                      alt="Producer Role"
                      className="pointer-events-none object-cover group-hover:opacity-75 absolute inset-0 w-full h-full rounded-lg" 
                    />
                  </div>
                </div>
              </li>
              </Link>
          </ul>
        </div>
      </div>
    </>
  );
}