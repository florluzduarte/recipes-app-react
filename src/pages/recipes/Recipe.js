import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

//styles
import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const urlRecipe = "http://localhost:3000/recipes/" + id;

  const { data: recipe, error, isPending } = useFetch(urlRecipe);

  return (
    <div className="recipe">
      {isPending && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
