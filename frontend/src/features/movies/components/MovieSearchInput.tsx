import { IMAGES_URL, useSearchMoviesQuery } from '../moviesApiSlice'
import type { Movie } from '../types/Movie'
import { useNavigate } from 'react-router'
import useDebouncedValue from '../../../hooks/useDebouncedValue'
import useActiveInput from '../hooks/useActiveInput'

function MovieSearchInput() {
  const navigate = useNavigate()
  const [search, setSearch, debouncedSearch] = useDebouncedValue('', 500)
  const { inputRef, inputFocused, showModal, setShowModal, onInputClick, onInputFocus } = useActiveInput(!!search)
  
  const { data, isFetching } = useSearchMoviesQuery(debouncedSearch, { skip: !debouncedSearch})
  const movies = data?.data?.results || []

  const shouldShowModal = showModal && debouncedSearch && inputFocused

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <input
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
        style={{ marginLeft: 16 }}
      />

      {shouldShowModal && (
        <div style={{
          position: 'absolute',
          top: 36,
          left: 0,
          background: 'white',
          border: '1px solid #ccc',
          borderRadius: 4,
          width: 300,
          zIndex: 1000,
          maxHeight: 400,
          overflowY: 'auto',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}>
            
          {isFetching && <div style={{ padding: 12 }}> Loading... </div>}
          
          {!isFetching && movies.length === 0 && <div style={{ padding: 12 }}>No movies found.</div>}

          {!isFetching && movies.map((movie: Movie) => (
            
            <div 
              key={movie.id} 
              style={{ padding: 12, borderBottom: '1px solid #eee', cursor: 'pointer' }}
              onMouseDown={e => {
                e.preventDefault();
                navigate(`/${movie.id}`, { state: { movie } });
              }}
            >
              {movie.poster_path && <img src={`${IMAGES_URL}${movie.poster_path}`} alt={movie.title} style={{ width: 50, height: 75 }} />}
              {movie.title}
            </div>
            
          ))}
        </div>
      )}
    </div>
  )
}

export default MovieSearchInput 