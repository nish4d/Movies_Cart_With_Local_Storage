import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ShowCart from '../ShowCart/ShowCart';

const Body = () => {
    const [cart, setCart] =  useState([])
    const [ times, setTimes] = useState('')

    useEffect(()=> {
        fetch('../../../public/data.json')
        .then(res=> res.json())
        .then(data=> setCart(data))
    },[])


    const handleCart = (time) => {
        // console.log(time);
        const previousData = JSON.parse(localStorage.getItem("watchTime"));
        if(previousData){
            const totalTime = previousData + time;
            localStorage.setItem('watchTime', totalTime);
            setTimes(totalTime)
        }else{
            localStorage.setItem('watchTime', time)
            setTimes(time)
        }
    }
    // console.log(times);

    // console.log(cart);
    return (
        <div className='grid grid-cols-6 mt-20'>
            <div className='col-span-5 grid grid-cols-3 gap-8 m-4'>
                {
                    cart.map(data=> <Cart data={data} key={data.movieName} handleCart={handleCart}></Cart>)
                }
            </div>
            <div className='col-span-1 text-center bg-slate-700 rounded-md m-4'>
                <ShowCart times={times}></ShowCart>
            </div>
        </div>
    );
};

export default Body;