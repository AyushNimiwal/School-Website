import React from 'react';
import Carousel from '../components/Carousel';
import bg from '../../public/images/background.png';

const Home = () => {
  return (
    <div className="home h-auto md:p-4  py-1">
      <div className="relative w-full h-[60vh] md:h-screen ">
        <div className="absolute top-0 left-0 z-10 flex flex-col justify-center items-center w-3/4 md:w-3/4 lg:w-1/2 h-full px-4 md:px-8 text-black rounded-lg">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium text-center overflow-hidden mb-4">
            Welcome to Springdale Public School
          </h1>
          <p className="text-lg md:text-xl text-center mb-6">
            Where we nurture young minds for a brighter future.
          </p>
        </div>
        <img
          src={bg}
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div className="h-auto px-2 mt-5 ">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
