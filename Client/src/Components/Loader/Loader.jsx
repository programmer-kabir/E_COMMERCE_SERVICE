import React from 'react';
import { HashLoader, PacmanLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div
        className='
        h-[100vh]
        flex 
        flex-col 
        justify-center 
        items-center 
      '
      >
     <HashLoader
    color="#36d6c3"
    cssOverride={null}
    loading
    size={30}
    speedMultiplier={1}
  />
      </div>
    );
};

export default Loader;