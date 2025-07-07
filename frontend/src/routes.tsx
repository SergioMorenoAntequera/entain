import MovieDetailsPage from "./features/movies/pages/MovieDetails.page"
import MoviesListPage from "./features/movies/pages/MoviesList.page"


const ROUTES = [
  { path: "/", element: <MoviesListPage/> },
  { path: "/:movieId", element: <MovieDetailsPage/> },
]

export default ROUTES