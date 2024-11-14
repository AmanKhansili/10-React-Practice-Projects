import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import ContectHeader from "./components/ContectHeader";
import ContectForm from "./components/ContectForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container w-full h-screen px-20 py-5">
      <Navigation />
      <ContectHeader />
      <ContectForm />
    </div>
  );
}

export default App;
