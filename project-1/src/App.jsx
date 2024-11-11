import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="body w-full h-screen px-24">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
