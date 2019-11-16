import React from 'react';

const Hero = () => {
  return (
    <div className='hero'>
      <span>
        Made at home.<br/>
        Just not yours.
      </span>
      <form>
        <input form='address' placeholder='Enter your address'></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Hero;