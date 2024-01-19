'use client'
import React, { useState } from 'react'
import Nav from './nav/Nav'
import Footer from './footer/Footer'
import useWindowDimensions from '@/utils/useWindowDemensions'

const PageWrapper = ({
  children,
  style,
}: {
  children: React.ReactNode
  style?: React.CSSProperties
}) => {
  const { width } = useWindowDimensions()
  const [showMobileNav, setMobileNav] = useState<boolean>(false)

  const triggerMobileNav = () => {
    setMobileNav(!showMobileNav)
  }

  const pageScrollingStop = {
    height: '100vh',
    overflowY: 'hidden',
  }
  return (
    <main
      style={{
        minHeight: '100vh',
        position: 'relative',
        width: '100vw',
        maxWidth: 1500,
        overflow: 'hidden',
        ...style,
      }}
    >
      <Nav
        triggerMobileNav={triggerMobileNav}
        showMobileNav={showMobileNav}
        windowSize={width}
      />
      {/* {showMobileNav && ( */}
      {children}
      {<Footer />}
      {/* )} */}
    </main>
  )
}

export default PageWrapper
