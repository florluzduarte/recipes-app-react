import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

//styles
import "./Search.css";

//components
import RecipeList from "../../components/RecipeList";

export default function Search() {
  const querySearch = useLocation().search;
  const queryParams = new URLSearchParams(querySearch);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/recipes?q=" + query;

  const { isPending, error, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Results for "{query}"</h2>
      {isPending && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
