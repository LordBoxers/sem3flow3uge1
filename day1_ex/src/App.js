import logo from './logo.svg';
import './App.css';
import upper, { text1, text2, text3 } from "./file1";
import person from "./file2";
import { females } from "./file2";
import { males } from "./file2";
import MultiWelcome from "./file3";

const { firstName, email } = person;

console.log(males.concat(females));

console.log(...males,firstName,"Helle",...females,"Tina");
males.push(firstName);
females.unshift("Helle");
females.push("Tina")
console.log(males.concat(females));

console.log(person)

function App() {
  return (
    <div className="App">
      <h2>ex1</h2>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{upper("hej")}</p>
      <p>Firstname: {person.firstName}</p>
      <p>Lastname: {person.lastName}</p>
      <p>Firstname: {person.gender}</p>
      <p>Firstname: {person.email}</p>

      <h2>ex2</h2>
      <p>smart Firstname: {firstName}</p>
      <p>smart email: {email}</p>

      <h2></h2>
      <MultiWelcome/>
    </div>
  );
}

export default App;
