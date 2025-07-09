import styled from 'styled-components'

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 32px;
`

export const MovieCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  padding: 24px 20px 20px 20px;
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:hover {
    box-shadow: 0 6px 24px rgba(0,0,0,0.16);
    transform: translateY(-4px) scale(1.02);
  }
`

export const PosterImage = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`

export const Title = styled.h2`
  margin: 0 0 8px 0;
  font-size: 1.3rem;
  color: #222;
`

export const Overview = styled.p`
  margin: 0 0 8px 0;
  color: #444;
  font-size: 1rem;
`

export const Release = styled.div`
  font-size: 0.95rem;
  color: #888;
  margin-top: 8px;
` 