import styled from 'styled-components'
import Container from './Container'
import MovieSearchInput from '../features/movies/components/MovieSearchInput'
import { useNavigate } from 'react-router'

const HeaderBg = styled.header`
  width: 100%;
  background: #181c24;
  padding: 0;
  margin: 0;
  min-height: 64px;
  display: flex;
  align-items: center;
`

function Header() {
  const navigate = useNavigate()
  return (
    <HeaderBg>
      <Container style={{ display: 'flex', alignItems: 'center', height: '64px' }}>
        <span
          onClick={() => navigate('/')}
          style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 20, cursor: 'pointer' }}
        >
          Home
        </span>
        
        <MovieSearchInput />
      </Container>
    </HeaderBg>
  )
}

export default Header