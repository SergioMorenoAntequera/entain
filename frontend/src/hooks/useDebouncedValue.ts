import { useState, useEffect } from 'react'

function useDebouncedValue<T>(initialValue: T, delay: number): [T, (v: T) => void, T] {
  const [value, setValue] = useState<T>(initialValue)
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return [value, setValue, debouncedValue]
}

export default useDebouncedValue 