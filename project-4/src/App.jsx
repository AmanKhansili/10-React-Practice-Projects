import { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-full">
      <StartGame />
    </div>
  );
}

export default App;
