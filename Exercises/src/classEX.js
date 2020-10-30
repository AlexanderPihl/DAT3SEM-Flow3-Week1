import './App.css';
import Demo, { Example1, Example2, textField } from './classEXdemo'
import { StateDemo } from './classExLiftState'
import { Api } from './classExApiFacade'
//import StateDemo from './classExStateDemo'

const names = [
    { fname: "Anders", lname: "Henriksen" },
    { fname: "Britta", lname: "Albertsen" },
    { fname: "Kalle", lname: "Fredborg" }
]

function App() {
    return (
        <div className="App">
            <h1>Day 1</h1>
            <Demo names={names} />

            <h1>Day 2</h1>
            <Example1 name=" its a prop" />

            <br />
            <Example2 />

            <br />
            <textField />

            <h1>Day 3</h1>
            <StateDemo />
            <br />
            <Api />
            <br />



        </div>
    );
}

export default App;