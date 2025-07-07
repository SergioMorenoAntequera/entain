import { useParams } from "react-router";



function MovieDetailsPage() {
  const { movieId } = useParams();

  return (
    <div>MovieDetailsPage {movieId}</div>
  )
}

export default MovieDetailsPage