import "./App.css";
import ResortContainer from "./Components/ResortContainer";
import listings from "./data/data";

function App() {
  return (
    <>
      <main>Resorts Lite</main>
      <ResortContainer listings={listings} />
    </>
  );
}

export default App;
