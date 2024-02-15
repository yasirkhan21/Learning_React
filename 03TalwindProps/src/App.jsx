import { useState } from "react";
import Card from "./Components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1
        className="bg-green-400 text-black p-4
    rounded-xl mb-4"
      >
        Tailwind Test
      </h1>
      <Card userName="chai or code" btnText="Click me!" />
      <Card userName="Yasir" btnText="Visit Me!" />
    </>
  );
}

export default App;
