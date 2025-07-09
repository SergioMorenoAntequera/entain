import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

export const SearchInput = styled.input`
  margin-left: 16px;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  width: 260px;
  transition: border 0.2s;
  &:focus {
    border-color: #0077ff;
    outline: none;
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
  z-index: 1000;
  max-height: 420px;
  overflow-y: auto;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  padding: 8px 0;
`

export const ModalMessage = styled.div`
  padding: 18px 20px;
  color: #888;
  font-size: 1rem;
  text-align: center;
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
`

export const Poster = styled.img`
  width: 54px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  background: #eee;
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
`

export const MovieYear = styled.div`
  font-size: 0.92rem;
  color: #666;
  margin-top: 2px;
` 