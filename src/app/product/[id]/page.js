import React from 'react';

const DynamicPage = ({params, searchParams}) => {
    console.log(searchParams);
    return (
        <div>
            <h1>This is dynamic page: {params.id}</h1>
            <h1>This is searchParams category: {searchParams.category}</h1>
            <h1>This is searchParams price: {searchParams.price}</h1>
        </div>
    );
};

export default DynamicPage;