import "./RecipeCard.css";

export default function RecipeCard(props) {
  return (
    <a href="">
      <div key={props.id} className="main">
        <img src={props.image} alt="don't forget to add alt" />
        <div className="titleAndDesc">
          <h2>{props.title}</h2>
          <dd>{props.description}</dd>
        </div>
      </div>
    </a>
  );
}
