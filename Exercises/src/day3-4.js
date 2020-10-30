import React from 'react';
import { NameForm, } from './day3-4FormDemo';
import { ReservationForm, } from './day3-4FormDemoMultiple';
import { LiftState } from './day3-4LiftState'

export default function day3and4() {
    return (
        <div>
            <h1>Exercises Day 3</h1>
            <h2>Forms and Controlled Components </h2>

            <h2>Ex. 1</h2>
            <NameForm />

            <h2>Ex. 2</h2>
            <ReservationForm />

            <br />

            <h2>Lifting State Up</h2>
            <br />
            <LiftState />

            <br />

            <h2>API Interaction using fetch (fall 2019)</h2>

        </div>
    )
}