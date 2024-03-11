
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Device name="Laptop" price="12000"></Device>
      <Device name="mobile" price="30000"></Device>
      <Device name="watch" price="15000"></Device>
      <Device name="book" price="320"></Device>
      <Person></Person>
      <Student grade="7" score="98"></Student>
      <Student grade="9" score="90"></Student>
      <Student grade="5" score="93"></Student>
      <Student grade="8" score="95"></Student>
      <Developer></Developer>
    </>
  );
}
function Device(props) {
  return (
    <h2>
      This Is Device:{props.name}, price: {props.price}
    </h2>
  );
}
function Developer() {
  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: " 2px solid blue",
        borderRadius: "20px",
      }}
    >
      <h5>Noor Nafi</h5>
      <p>Student:</p>
    </div>
  );
}
function Person() {
  const age = 40;
  const money = 50;
  const person = { name: "Wajed", age: 12 };

  return (
    <h3>
      I am a {person.name} With Age :{age + money}
    </h3>
  );
}
const { grade, score } = { grade: "7", score: "98" };
function Student({ grade, score }) {
  //console.log(props)
  return (
    <div className="student">
      <h3>This Is Nehan</h3>
      <p>Class:{grade}</p>
      <p>Score:{score}</p>
    </div>
  );
}
export default App;
