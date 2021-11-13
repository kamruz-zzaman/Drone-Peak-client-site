import React from 'react';
import { Link } from 'react-router-dom';

const HomeProductCard = ({ drone }) => {
    const { Img, Name, Description, Price } = drone;
    return (
        <>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 m-5">
                <Link className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Img} />
                </Link>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{Name}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{Description.slice(0, 100)}...</h2>
                    <p className="mt-1">Tk. {Price}</p>
                    <button className='py-1 px-3 bg-white text-green-500 hover:bg-green-500 rounded-lg hover:text-white font-normal border-2 border-green-500 mt-2'>Purchase</button>
                </div>
            </div>
        </>
    );
};

export default HomeProductCard;