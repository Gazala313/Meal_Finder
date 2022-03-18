import { useState } from "react";
import Image from "./Image";
import Random from "./Random";

function Meals() {
  const [inputs, setInputs] = useState("");
  const [Loading, setLoading] = useState(false);
  const [results, setResult] = useState([]);
  const [error, setError] = useState("");
  const [randoms, setRandom] = useState([]);

  function SearchMeal() {
    setLoading(true);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputs}`;
    fetch(url)
      .then((res) => res.json())
      .then((respones) => {
        setLoading(false);
        if (respones.meals === null) {
          setError("Receipe not Found");
          setResult("");
        } else {
          setResult(respones.meals);
          setError("");
        }
        console.log(respones);
      });
    setRandom("");
  }
  if (Loading) {
    return <h1 style={{ color: "#fff" }}>Loading...</h1>;
  }

  function RandomClick() {
    setResult("");
    const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setRandom(response.meals);
        console.log(response);
      });
  }

  return (
    <div>
      <h1 className="header">Meal Finder</h1>

      <input
        className="input"
        type="text"
        placeholder="Search for Meal..."
        value={inputs}
        onChange={(e) => {
          setInputs(e.target.value);
        }}
      />
      <button className="btn" onClick={SearchMeal}>
        <i
          class="fa fa-search"
          style={{ backgroundColor: "#fff", fontSize: "23px" }}
        ></i>
      </button>

      <button className="btn" onClick={RandomClick}>
        <i
          class="fa fa-random"
          style={{ backgroundColor: "#fff", fontSize: "23px" }}
        ></i>
      </button>

      <div className="search_result">
        {error ? (
          <h4 style={{ color: "red", fontSize: "30px" }}>{error}</h4>
        ) : null}
        {results &&
          results.map((item, index) => (
            <div>
              <Image item={item} key={index} />
            </div>
          ))}

        {randoms && randoms.map((ele) => <Random ele={ele} />)}
      </div>
    </div>
  );
}

export default Meals;
