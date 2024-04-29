import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';
import AspectRatio from '@mui/joy/AspectRatio';
import CardOverflow from '@mui/joy/CardOverflow';


const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.kuchbhi.cart);
  return (
    <div >
        <h1 className='text-center text-2xl'>Your Cart</h1>
        {cart.map((product) => {
            return (
                <div key={product.id} className='flex flex-row gap-10 justify-around border-2 p-2 my-2'>
                    {/* <img src={product.image} alt={product.title} className='w-1/4' /> */}
                    <CardOverflow>
                        <AspectRatio sx={{ minWidth: 200 }}>
                            <img
                                src={product.image}
                                srcSet={product.image}
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <div className='flex flex-col gap-7'>
                        <div className='flex flex-col'>
                            <p className='text-lg'>{product.title}</p>
                            <p className='text-lg'>Price: {product.price}</p>
                        </div>
                        <button onClick={()=>dispatch(removeFromCart({id: product.id}))}>Remove</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Cart