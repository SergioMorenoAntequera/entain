import { useParams, useLocation } from "react-router";
import { useGetMovieQuery } from "../moviesApiSlice";
import { skipToken } from "@reduxjs/toolkit/query";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const movieFromState = location.state?.movie;

  const { data, error, isLoading } = useGetMovieQuery(movieId || skipToken, {
    skip: !!movieFromState
  });

  if (isLoading) return <div>Loading...</div>;
  if (error || (!data && !movieFromState)) return <div>Error loading movie details</div>;
  const movie = movieFromState || data?.data;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
}

export default MovieDetailsPage;