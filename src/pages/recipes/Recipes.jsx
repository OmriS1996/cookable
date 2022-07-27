import {
  mocRecipes,
  category,
  measureType,
  ingredient,
} from "../../mocdata/mocdata";
import RecipeCard from "../../Components/recipecard/RecipeCard";
import "./Recipes.css";

export default function Recipes(props) {
  return (
    <div className="recipes">
      {mocRecipes.map((item) => (
        <RecipeCard
          id={item.id}
          image={item.imageURL}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
