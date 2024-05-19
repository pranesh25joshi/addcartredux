/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6PMsETMVopz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';
// import AspectRatio from '@mui/joy/AspectRatio';
// import CardOverflow from '@mui/joy/CardOverflow';
// import { Button } from "@/components/ui/button"

export default function NewCart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.kuchbhi.cart);
    
    return (
        <div>
            <h1 className='text-center text-2xl'>Your Cart</h1>
            {cart.map((product) => {
                return (
                    <div key={product.id} className="flex items-start justify-between p-6 bg-white rounded-lg shadow-md">
                      <img
                        alt="Backpack"
                        className="w-36 h-36 bg-gray-300 rounded-md"
                        height="150"
                        src={product.image}
                        style={{
                          aspectRatio: "150/150",
                          objectFit: "cover",
                        }}
                        width="150"
                      />
                      <div className="flex flex-col justify-between flex-grow ml-6">
                        <div>
                          <h3 className="text-lg font-bold">{product.title}</h3>
                          <p className="text-sm text-gray-500">Price: ${product.price}</p>
                          <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
                        </div>
                        <div className="mt-4">
                          <button className="self-end bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" onClick={() =>
                            dispatch(removeFromCart({ id: product.id }))
                          }>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
            })}
        </div>
    );
}