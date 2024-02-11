import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from './countSlice';
const Buttons = () => {

    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);


    return (
        <div className='flex'>
                <h1>Counter: {count}</h1>
           <button onClick={() => dispatch(increment())}>Increment</button>
           <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Buttons;
