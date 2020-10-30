# Questions from all assignments in Flow 3 Week 1:

1) What is the purpose of the key value, which must be given to individual rows in a react-list?
So we can identify each row uniquely -> Keys help React identify which items have changed (added/removed/re-ordered). To give a unique identity to every element inside the array, a key is required.

2) It's recommended to use a unique value from your data if available (like an ID). How do you get a unique value in a map callback, for data without a unique id?
You can use the index parameter from .map to assign a key value.
Wherever you're lopping over data, here this.state.lists.map, you can pass second parameter function(list, index) to the callback as well and that will be its index value and it will be unique for all the items in the array.
You can use the index function of map(item,index) to assign a key value

other example could be using uuid ->
```javascript 
import React from 'react'
import uuid from 'react-uuid'

const array = ['one', 'two', 'three']

export const LineItem = item => <li key={uuid()}>{item}</li>

export const List = () => array.map(item => <LineItem item={item} />)
```

3) What is the difference(s) between state and props?
In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component.
Props are read-only and state is for changing props/variables

4) For which scenarios would you use props, and for which would you use state?
I would use props when im only displaying/reading values and state when I have to change a value in components

5) Where is the only place you can set state directly as in:  this.state = {name: "Peter"};?
We use this. when are are working with Class components and would set state in the class constructor

6) How should you set state all other places?
In function components i would use the method setState() where we also have a getter and a setter -> [count, setCount]

### Answer the following questions before you continue In a Controlled Component React state is made the "Single source of truth", so how:

1) Do we ensure that input controls like text, textarea or select always present the value found in the components state?
We ensure the inputs are shown correctly by using the following code:
```javascript
const handleInput = (event) => {
        const target = event.target;
        const id = target.id;
        const value = target.value;
        setPerson({ ...person, [id]: value })
    }
 ```   
and by having a value to our input fields:

```javascript
 <form onSubmit={handleSubmit} onChange={handleInput}>
                <input id="name" type="text" value={person.name} placeholder="name" />
            </form>
            <button onClick={handleSubmit}>Submit</button>
            <p>{JSON.stringify(person)}</p>
```

The controlled input is when the React component that renders a form also controls what happens in that form on subsequent user input. This means that, as form value changes, the component that renders the form saves the value in its state.



2) Do we ensure that a controls’ state, always matches the value found in an input control?
Look at the code above and also by using the method ex -> setCount.

The goal is that each time the input changes, the method changeHandler is called and will store the input state. Hence the component always has the current value of the input without needing to ask for it. This means that the form component can respond to input changes immediately.


3) What is the purpose of doing event.preventDefault() in an event handler?
So we don't reload the page and reestablish connection to the server. By using preventDefault we ensure that our application is a single page application.


4) What would be the effect of NOT doing event.preventDefault in a submit handler?
The effect would be that we would reload the page and have to reestablish our connection to the server (slower performance).


5) Why don't we want to submit the traditional way, in a single page application?
As mentioned in the two earlier questions. We don't want to submit the traditional way because that would destroy the whole purpose of having a single page application.

### Lifting state

1) What is meant by the react term “Lifting State Up”?
Lifting state up and down enables you to scale your state management with plain React. When more components are interested in particular state, you can lift the state up until you reach a common parent component for the components that need access to the state.

2) Where do you lift it up to?
You lift a state up to the parrent component


3) Which way does React recommend data to flow: From sibling to sibling, from bottom to top or from top to bottom?
states does not go sideways so we lift a state from bottom to top and then from top to bottom.


4) Lifting state up, involves a great deal of boilerplate code, what’s the benefit we get from doing “things” like this?
Boilerplate is a section of code that doesn't change and can be re-used anywhere. Instead of re-writing the same code for every new project, developers use boilerplate to avoid risk of error and save time.

