import { Link } from 'react-router-dom';
import ConsumerNavBar from '../../components/navbar/ConsumerNavBar';
// import CoOpInfo from '../components/CoOpInfo';
// import ProducerInfo from '../components/ProducerInfo';
// import ConsumerInfo from '../components/ConsumerInfo';
import { useState } from 'react';

export default function ChooseRole() {
  const [isHovered, setIsHovered] = useState([false, false, false]);
  const [showConsumerInfo, setShowConsumerInfo] = useState(false);
  const [showCoOpInfo, setShowCoOpInfo] = useState(false);
  const [showProducerInfo, setShowProducerInfo] = useState(false);

  const handleMouseEnter = index => {
    const updatedHovered = [...isHovered];
    updatedHovered[index] = true;
    setIsHovered(updatedHovered);
  };

  const handleMouseLeave = index => {
    const updatedHovered = [...isHovered];
    updatedHovered[index] = false;
    setIsHovered(updatedHovered);
  };

  return (
    <>
      <ConsumerNavBar />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center"> 
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl whitespace-nowrap mb-8">How would you like to use EZH?</h2> 
          <ul role="list" className="flex flex-wrap justify-center items-center">
            {[0, 1, 2].map(index => (
              <li 
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="relative w-72 h-72 m-4 flex justify-center items-center"
              >
                <div 
                  className="aspect-h-7 aspect-w-10 block overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
                >
                  <div className={`h-0 transition-opacity duration-300 ${isHovered[index] ? 'opacity-50' : 'opacity-100'}`}>
                    <img
                      src={`/images/${index === 0 ? 'consumer' : index === 1 ? 'co-op' : 'producer'}.jpg`}
                      alt={index === 0 ? 'Consumer Role' : index === 1 ? 'Co-Op Role' : 'Producer Role'}
                      className="pointer-events-none object-cover absolute inset-0 w-full h-full rounded-lg" 
                    />
                  </div>
                  <button
                    onClickCapture={event => {
                      // Need to make modal appear on button click
                      event.stopPropagation();
                      if (index === 0) setShowConsumerInfo(true);
                      else if (index === 1) setShowCoOpInfo(true);
                      else setShowProducerInfo(true);
                    }}
                    className={`absolute z-1000 bottom-4 right-4 bg-gray-800 text-white px-4 py-2 transition-opacity duration-300 rounded-lg ${isHovered[index] ? 'opacity-100' : 'opacity-0'}`}
                  >
                    More Info
                  </button>
                    <button className={`absolute inset-0 flex justify-center items-center w-full h-full bg-transparent text-black opacity-0 hover:opacity-100 transition-opacity duration-300 focus:outline-none shadow-md`}>
                      <Link to={index === 0 ? "/consumer-registration" : index === 1 ? "/co-op-registration" : "/producer-registration"}>
                      <span className="text-lg font-semibold">Become a {index === 0 ? 'Consumer' : index === 1 ? 'Co-Op' : 'Producer'}</span>
                      </Link>
                    </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showConsumerInfo && <ConsumerInfo onClose={() => setShowConsumerInfo(false)} />}
      {showCoOpInfo && <CoOpInfo onClose={() => setShowCoOpInfo(false)} />}
      {showProducerInfo && <ProducerInfo onClose={() => setShowProducerInfo(false)} />}
    </>
  );
}
