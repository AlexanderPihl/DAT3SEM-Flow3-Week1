import React, { useEffect, useState } from 'react';
import './App.css';

export function Clicker(props) {

    const [count, setCount] = useState(parseInt(props.initValue));

    const value = props.number + count;

    useEffect(() => {
        localStorage.setItem("count", count);
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <p> {count} </p>
            <button onClick={() => setCount(count + props.value)}>
                increment number by {props.value}
            </button>

            <button onClick={() => setCount(count - props.value)}>
                decrement number by {props.value}
            </button>
        </div>
    );
}