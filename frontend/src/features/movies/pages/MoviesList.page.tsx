
import { useGetPopularMoviesQuery } from "../moviesApiSlice"



function MoviesListPage() {

  const { data, error, isLoading } = useGetPopularMoviesQuery()
  const movies = data?.data?.results || []

  return (<div>

      <h1>Popular Movies</h1>

      {isLoading && <p>Loading movies...</p>}
      {error && <p>Error loading movies</p>} 
      {movies.map(movie => (
        <a key={movie.id} href={`/${movie.id}`}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
        </a>
      ))}

  </div>)
}


export default MoviesListPage