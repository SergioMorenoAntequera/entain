import { useParams } from "react-router";
import { useGetMovieQuery } from "../moviesApiSlice";

function MovieDetailsPage() {
  const { movieId } = useParams()
  const { data, error, isLoading } = useGetMovieQuery(movieId)

  if (isLoading) return <div>Loading...</div>
  if (error || !data) return <div>Error loading movie details</div>
  const movie = data.data

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  )
}

export default MovieDetailsPage