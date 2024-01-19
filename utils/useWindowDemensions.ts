import { useState, useEffect, useLayoutEffect } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number
    height: number
  }>({
    width: 0,
    height: 0,
  })

  const handleResize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useLayoutEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowDimensions
}
