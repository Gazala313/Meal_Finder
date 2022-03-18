import Header from "./Components/Header";
import Meals from "./Components/Meals";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Meals />
      </div>
    </>
  );
}
