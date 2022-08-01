import { getAllRecipes } from "../../lib/mocApiCalls";
import RecipeCard from "../../Components/recipecard/RecipeCard";
import "./Recipes.css";
import { useEffect, useState } from "react";

export default function Recipes(props) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    let recipesData = getAllRecipes();
    setRecipes(recipesData);
  }, []);

  return (
    <div className="recipes">
      {recipes.map((item) => (
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
