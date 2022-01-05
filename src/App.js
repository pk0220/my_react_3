import { useState } from "react";

export default function App() {
  return (
    <>
      <Mycomponent />
    </>
  );
}

function Mycomponent() {
  let [counter, setcounter] = useState(0);
  let increment = () => {
    console.log(counter++);
    setcounter(counter);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <div>Like {counter}</div>
      <input type="button" value="Like here" onClick={increment} />
    </div>
  );
}
