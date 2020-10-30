import React from 'react';
import { Clicker } from "./day2EX1";
import { FetchJoke } from './day2EX2';
import { Ex3 } from './day2EX3';

export default function day2() {
    return (
        <div>
            <h1>Exercises Day 2</h1>

            <h2>Ex. 1</h2>
            <Clicker initValue={localStorage.getItem("count")} value={5} />

            <h2>Ex. 2</h2>
            <FetchJoke/>

            <h2>Ex. 3</h2>
            <Ex3/>

        </div>
    )
}
