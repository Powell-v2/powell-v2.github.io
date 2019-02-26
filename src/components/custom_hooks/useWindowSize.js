import { useState, useEffect } from 'react'

const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  })

  useEffect(() => {
    const handler = () => setDimensions({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    })

    window.addEventListener(`resize`, handler)
    return () => window.removeEventListener(`resize`, handler)
  }, [1])

  return dimensions
}

export default useWindowSize
