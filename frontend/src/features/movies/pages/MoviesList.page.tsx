
import { useGetPopularMoviesQuery } from "../moviesApiSlice"
import { useNavigate } from 'react-router'
import { MovieGrid, MovieCard, PosterImage, Title, Overview, Release } from './MoviesList.styles'
import { IMAGES_URL } from "../moviesApiSlice"

function MoviesListPage() {
  const { data, error, isLoading } = useGetPopularMoviesQuery()
  const movies = data?.data?.results || []
  const navigate = useNavigate()

  return (
    <div>
      
      <h1>Popular Movies</h1>
      {isLoading && <p>Loading movies...</p>}
      {error && <p>Error loading movies</p>}
      
      <MovieGrid>
        {movies.map(movie => (
          <MovieCard key={movie.id} onClick={() => navigate(`/${movie.id}`, { state: { movie } })}>
            {movie.poster_path && (
              <PosterImage
                src={`${IMAGES_URL}${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <Title> {movie.title} </Title>
            <Overview> {movie.overview} </Overview>
            <Release> Release Date: {movie.release_date} </Release>
          </MovieCard>
        ))}
      </MovieGrid>

    </div>
  )
}

export default MoviesListPage