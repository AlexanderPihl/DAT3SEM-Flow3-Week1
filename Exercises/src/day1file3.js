import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { persons } from "./day1file2";
import PropTypes from 'prop-types'

export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

export function WelcomePerson(props) {
    return <p>Hello, {props.person.firstName} {props.person.lastName}, your email is {props.person.email}</p>;
}

export function MultiWelcome() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edith" />

            {persons.map((persons) => <WelcomePerson person={persons} />)}
        </div>
    );
}

//virker ikke endnu????
WelcomePerson.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string
}




