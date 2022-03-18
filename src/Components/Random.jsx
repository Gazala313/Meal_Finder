function Random(props) {
  return (
    <div className="itm1">
      <img className="image" src={props.ele.strMealThumb} alt=""></img>c
      <div className="flex-container">
        <div className="Title">{props.ele.strMeal}</div>
        <a className="view-btn" href={props.ele.strSource} target="_blank">
          View Receipe
        </a>
      </div>
    </div>
  );
}
export default Random;
