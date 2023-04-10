import React from 'react';

const Blog = () => {
    return (
        <div>
          <h2 className='text-3xl font-bold text-center text-purple-400 mt-5'>When should one use context API ?</h2>
          <p className='text-xl text-gray-500 mt-5'>Developer should use context API when a common data is needed to be accessed by multiple components.</p>
          <h2 className='text-3xl font-bold text-center text-purple-400 mt-5'>What is a cutom hook?</h2>
          <p className='text-xl text-gray-500 mt-5'>To add unique functionalities by the developer himself he uses customs hook , custom hooks are basically reuseable functions .</p>
          <h2 className='text-3xl font-bold text-center text-purple-400 mt-5'>What is useRef in react?</h2>
          <p className='text-xl text-gray-500 mt-5'>
            UseRef is a react hook which take one arguement as the initial value and returns a referance in a object having the property current . </p>
            <h2 className='text-3xl font-bold text-center text-purple-400 mt-5'>What is useMemo in react?</h2>
          <p className='text-xl text-gray-500 mt-5'>
          React has a  hook called useMemo that  memoize expensive functions , to avoid calling them on every render. Devloper simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed. </p>
        </div>
    );
};

export default Blog;