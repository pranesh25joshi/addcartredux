import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    const getData = () => {axios.get('https://fakestoreapi.com/products')
        .then(response => {
            console.log(response.data);
            setProducts(response.data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        })};

    useEffect(() => {
        getData();
    }, []);
    // UseSelector is a hook that is used to extract data from the Redux store state, using a selector function.
    const cart = useSelector((state) => state.kuchbhi.cart);

  return (
    <div className=' m-4 text-center gap-4 flex flex-wrap justify-center'>
        {/* <Link to="/cart">{cart.length > 0 && <div className='bg-green-500 text-white p-2'>You have {cart.length} items in your cart</div>}</Link> */}
        {products.map((product) => {
            return (
                <div key={product.id} className='flex flex-col '>
                    <ProductCard id={product.id} category={product.category} title={product.title} price={product.price} image={product.image} rating={product.rating.rate} count={product.rating.count} />
                </div>
            )
        })}
    </div>
  )
}

export default Home