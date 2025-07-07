import { JSX } from "react";
import MovieDetailsPage from "./features/movies/pages/MovieDetails.page"
import MoviesListPage from "./features/movies/pages/MoviesList.page"

type Route = {
  path: string;
  element: JSX.Element;
  layout?: React.ComponentType;  
}

const ROUTES: Route[] = [
  { path: "/", element: <MoviesListPage/>},
  { path: "/:movieId", element: <MovieDetailsPage/> },
]

export default ROUTES