import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`

export const SearchInput = styled.input`
  margin-left: 16px;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  width: 260px;
  max-width: 90vw;
  transition: border 0.2s, width 0.2s;
  box-sizing: border-box;
  &:focus {
    border-color: #0077ff;
    outline: none;
  }
  @media (max-width: 600px) {
    width: 180px;
    font-size: 0.97rem;
    padding: 9px 10px;
  }
  @media (max-width: 400px) {
    width: 120px;
    font-size: 0.93rem;
    padding: 8px 8px;
    margin-left: 6px;
  }
`

export const Modal = styled.div`
  position: absolute;
  top: 44px;
  left: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 340px;
  max-width: 95vw;
  z-index: 1000;
  max-height: 420px;
  overflow-y: auto;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  padding: 8px 0;
  @media (max-width: 600px) {
    width: 220px;
    font-size: 0.97rem;
  }
  @media (max-width: 400px) {
    width: 98vw;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 8px 8px;
    min-width: 0;
    padding: 4px 0;
  }
`

export const ModalMessage = styled.div`
  padding: 18px 20px;
  color: #888;
  font-size: 1rem;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 0.97rem;
    padding: 14px 8px;
  }
  @media (max-width: 400px) {
    font-size: 0.93rem;
    padding: 10px 4px;
  }
`

export const MovieCard = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 18px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #f5f8fa;
  }
  &:last-child {
    border-bottom: none;
  }
  @media (max-width: 600px) {
    padding: 10px 8px;
  }
  @media (max-width: 400px) {
    padding: 8px 4px;
  }
`

export const Poster = styled.img`
  width: 54px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  background: #eee;
  @media (max-width: 600px) {
    width: 38px;
    height: 56px;
    margin-right: 8px;
  }
  @media (max-width: 400px) {
    width: 28px;
    height: 40px;
    margin-right: 4px;
  }
`

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`

export const MovieTitle = styled.div`
  font-weight: 600;
  font-size: 1.05rem;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 600px) {
    font-size: 0.97rem;
  }
  @media (max-width: 400px) {
    font-size: 0.93rem;
  }
`

export const MovieYear = styled.div`
  font-size: 0.92rem;
  color: #666;
  margin-top: 2px;
  @media (max-width: 600px) {
    font-size: 0.89rem;
  }
  @media (max-width: 400px) {
    font-size: 0.85rem;
  }
` 