import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  // throw new Error()
  return (
    <div className='p-10'>
      <h1 className='my-10'>My First Next.Js App</h1>
      <div className='my-5'>
        <Link href="/about">
          <button className='btn btn-primary'>About</button>
        </Link>
      </div>
      <div className=' '>
        <Link href="/contact">
          <button className='btn btn-primary'>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;