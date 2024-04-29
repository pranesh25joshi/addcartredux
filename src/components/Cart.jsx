import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';
import AspectRatio from '@mui/joy/AspectRatio';
import CardOverflow from '@mui/joy/CardOverflow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.kuchbhi.cart);
  return (
    <div >
        <h1 className='text-center text-2xl'>Your Cart</h1>
        {cart.map((product) => {
            return (
              <div
                key={product.id}
                // className="flex flex-row gap-10 border-2 p-2 my-2"
              >
                {/* <img src={product.image} alt={product.title} className='w-1/4' /> */}
                <CardOverflow
                  style={{
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    transition: "0.3s",
                    borderRadius: "5px",
                  }}
                >
                  <AspectRatio sx={{ minWidth: 200 }}>
                    <img
                      src={product.image}
                      srcSet={product.image}
                      loading="lazy"
                      alt=""
                      style={{ borderRadius: "5px 5px 0 0" }}
                    />
                  </AspectRatio>
                  <div
                    className="flex flex-col gap-7"
                    style={{ padding: "2px 16px" }}
                  >
                    <div className="flex flex-col">
                      <p
                        className="text-lg"
                        style={{ margin: "16px 0", fontWeight: "bold" }}
                      >
                        {product.title}
                      </p>
                      <p className="text-lg" style={{ color: "grey" }}>
                        Price: {product.price}
                      </p>
                      <p className="text-lg">Quantity: {product.quantity}</p>
                    </div>
                    <button
                      className=""
                      onClick={() =>
                        dispatch(removeFromCart({ id: product.id }))
                      }
                      style={{
                        border: "none",
                        color: "white",
                        backgroundColor: "#f44336",
                        textAlign: "center",
                        textDecoration: "none",
                        display: "inline-block",
                        fontSize: "16px",
                        margin: "4px 2px",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </CardOverflow>
              </div>
            );
        })}
    </div>
  )
}

export default Cart