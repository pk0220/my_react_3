import { useState } from "react";

export default function App() {
  return (
    <>
      <Mycompo></Mycompo>
    </>
  );
}

function Mycompo() {
  let [msg, setmsg] = useState("");
  let changemsg = (e) => {
    setmsg(e.target.value);
  };
  return (
    <div>
      <h1>counter App 2</h1>
      <input type="text" value={msg} onChange={changemsg} />
      <div>{msg}</div>
    </div>
  );
}
