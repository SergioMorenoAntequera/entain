import { IMAGES_URL, useSearchMoviesQuery } from '../moviesApiSlice'
import type { Movie } from '../types/Movie'
import { useNavigate } from 'react-router'
import useDebouncedValue from '../../../hooks/useDebouncedValue'
import useActiveInput from '../hooks/useActiveInput'
import { Wrapper, SearchInput, Modal, ModalMessage, MovieCard, Poster, MovieInfo, MovieTitle, MovieYear } from './MovieSearchInput.styles'

function MovieSearchInput() {
  const navigate = useNavigate()
  const [search, setSearch, debouncedSearch] = useDebouncedValue('', 500)
  const { inputRef, inputFocused, showModal, setShowModal, onInputClick, onInputFocus } = useActiveInput(!!search)
  
  const { data, isFetching } = useSearchMoviesQuery(debouncedSearch, { skip: !debouncedSearch})
  const movies = data?.data?.results || []

  const shouldShowModal = showModal && debouncedSearch && inputFocused

  return (
    <Wrapper>
      <SearchInput
        ref={inputRef}
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={e => {
          setSearch(e.target.value)
          setShowModal(!!e.target.value)
        }}
        onClick={onInputClick}
        onFocus={onInputFocus}
        onBlur={() => {}}
      />

      {shouldShowModal && (
        <Modal>
          {isFetching && <ModalMessage>Loading...</ModalMessage>}
          {!isFetching && movies.length === 0 && <ModalMessage>No movies found.</ModalMessage>}
          {!isFetching && movies.map((movie: Movie) => (
            <MovieCard
              key={movie.id}
              onMouseDown={e => {
                e.preventDefault();
                navigate(`/${movie.id}`, { state: { movie } });
              }}
            >
              {movie.poster_path ? (
                <Poster src={`${IMAGES_URL}${movie.poster_path}`} alt={movie.title} />
              ) : (
                <Poster as="div" style={{ background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa', fontSize: 12 }}>
                  No Image
                </Poster>
              )}
              <MovieInfo>
                <MovieTitle title={movie.title}>{movie.title}</MovieTitle>
                {movie.release_date && (
                  <MovieYear>
                    {new Date(movie.release_date).getFullYear()}
                  </MovieYear>
                )}
              </MovieInfo>
            </MovieCard>
          ))}
        </Modal>
      )}
    </Wrapper>
  )
}

export default MovieSearchInput 