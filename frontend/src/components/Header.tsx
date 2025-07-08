import MovieSearchInput from '../features/movies/components/MovieSearchInput'

function Header() {
  return (
    <div style={{ position: 'relative' }}>
      <a href="/"> Home </a>
      <MovieSearchInput />
    </div>
  )
}

export default Header