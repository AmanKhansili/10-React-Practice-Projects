import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <div className="site-container grid place-items-center min-h-screen p-6">
        <div className="card flex justify-evenly items-center w-1/2 h-[300px] p-9 rounded-xl bg-white bg-opacity-[48%] shadow-[0_0_10px_1px_rgba(0,0,0,0.25)] backdrop-blur-lg max-md:flex-col max-md:w-fit max-md:h-[450px] max-xl:w-3/4">
          <ProfileCard />
        </div>
      </div>
    </>
  );
}

export default App;
