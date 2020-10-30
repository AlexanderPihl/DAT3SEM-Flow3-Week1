import React, { Component, useState, useEffect } from 'react';
import './App.css';

//Functional component
const MyDemo = (props) => {

    return (
        <div>
            <table>
                <tr>
                    <th>First name</th>
                    <th>Last Name</th>
                </tr>
                {props.names && props.names.map((el) => (
                    <tr>
                        <td>{el.fname}</td>
                        <td>{el.lname}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

//Class component must include render() (props skal hentes med this.)
class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <table class="center">
                    <tr>
                        <th>First name</th>
                        <th>Last Name</th>
                    </tr>
                    {this.props.names.map((el) => (
                        <tr>
                            <td>el.fname</td>
                            <td>el.lname</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}

export default MyDemo;

export const Example1 = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            {props.name}
        </div>
    )
}

//Functional component
export const Example2 = () => {
    const [time, setTime] = useState(0);
    return (
        <div>
            <p>{time}</p>
            <button onClick={() => setTime(new Date().toLocaleString())}>
                check time
           </button>
        </div >
    )
}

/*
export const textField = () => {
    const [myValue, setMyValue] = useState("");

    function change(event) {
        setMyValue(event.target.value);
    }
    return (
        <div>
            <input type="text" value={myValue} onchange={change} />
        </div>
    )
}
*/