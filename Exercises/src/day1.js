import './App.css';
import upper, { text1, text2, text3 } from "./day1file1";
import person, { males, females } from "./day1file2";
import { Welcome, WelcomePerson, MultiWelcome } from "./day1file3";
import { persons } from "./day1file2";

const { firstName, email, gender, lastName } = person;

const list1 = [...males, ...females];
console.log(list1);

const list2 = [...males, "Kurt", "Helle", ...females, "Tina"];
console.log(list2);

let personV2 = [{ ...person, friends: list1, phone: '12121212' }];
console.log(personV2);

function App() {
  return (
    <div className="App">

      <h1>Exercises Day 1</h1>

      <div className="App">

        <h2>Ex. 1</h2>
        <p>{upper("please uppercase me")}</p>
        <p>{upper(text1)}</p>
        <p>{upper(text2)}</p>
        <p>{upper(text3)}</p>

        <h2>Ex. 2</h2>
        <p>First name: {firstName} <br /> Email: {person.email}</p>

        <h2>Ex. 3</h2>
        <Welcome />

        <MultiWelcome />

        <h2>Ex. 3b</h2>
        <WelcomePerson person={persons[0]} />
        <WelcomePerson person={persons[1]} />
        <WelcomePerson person={persons[2]} />

      </div >

    </div>
  );
}

export default App;
