import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <h1 className='font-semibold text-center my-5 text-4xl'>Header</h1>
            {children}
            <h1 className='font-semibold text-center my-5 text-4xl'>Footer</h1>
        </div>
    );
};

export default Layout;