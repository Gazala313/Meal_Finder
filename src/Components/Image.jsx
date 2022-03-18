function Image(props) {
  return (
    <div className="itm">
      <img src={props.item.strMealThumb} alt=""></img>
      <div className="flex-container">
        <div
          className="Title"
          style={{ backgroundColor: " rgb(212, 208, 171)" }}
        >
          {props.item.strMeal}
        </div>
        <a href={props.item.strSource} target="_blank" className="view-btn">
          View Receipe
        </a>
      </div>
    </div>
  );
}
export default Image;
