import { useFetch } from "../../hooks/useFetch";

//styles
import "./Home.css";

//components
import RecipeList from "../../components/RecipeList";

export default function Home() {
  const urlData = "http://localhost:3000/recipes";
  const { data: recipes, error, isPending } = useFetch(urlData);

  return (
    <div className="home">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
