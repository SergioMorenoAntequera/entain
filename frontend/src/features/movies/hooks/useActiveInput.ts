import { useState, useRef, useEffect } from 'react'

function useActiveInput(active: boolean) {
    
  const [showModal, setShowModal] = useState(false)
  const [inputFocused, setInputFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (inputRef.current && !(inputRef.current as any).contains(e.target)) {
        setShowModal(false)
        setInputFocused(false)
      }
    }
    if (showModal) {
      document.addEventListener('mousedown', handleClick as any)
      return () => document.removeEventListener('mousedown', handleClick as any)
    }
  }, [showModal])

  const onInputClick = () => {
    setInputFocused(true)
    if (active) setShowModal(true)
  }

  const onInputFocus = () => {
    setInputFocused(true)
    if (active) setShowModal(true)
  }

  return {
    inputRef,
    inputFocused,
    showModal,
    setShowModal,
    onInputClick,
    onInputFocus
  }
}

export default useActiveInput 