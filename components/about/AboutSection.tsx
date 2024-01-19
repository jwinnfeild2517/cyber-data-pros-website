'use client'

import React, { useState } from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import useWindowDimensions from '@/utils/useWindowDemensions'
import dynamic from 'next/dynamic'

const StaffCarousel = dynamic(() => import('../staff/StaffCarousel'))

type AboutText = {
  mission: string
  values: string
}

const aboutText: AboutText = {
  mission: `Our mission is to provide data privacy and security expertise to help companies spend more time growing their business by establishing a more secure ecosystem.`,
  values: `At CyberData Pros, our success is built on a foundation of strong core values, which guide us in every decision we make. We promise to make a Commitment to personal and shared Growth while embracing Teamwork to reach success by taking Accountability for each other and maintaining Integrity.`,
}

const AboutSection = () => {
  const { height, width } = useWindowDimensions()
  const [currentAboutText, setCurrentAboutText] =
    useState<keyof AboutText>('mission')

  const handleClick = (e: keyof AboutText) => {
    setCurrentAboutText(e)
  }

  return (
    <div className={styles['about-container']}>
      <div className={styles['about-us-text-content']}>
        <p className={styles['text-content-header']}>Know about us</p>
        <p className={styles['text-content-subheader']}>
          We Provide with Passion
        </p>
        <div className={styles['text-content-action-container']}>
          <button
            onClick={() => handleClick('mission')}
            className={styles['text-content-action']}
            style={{
              backgroundColor:
                currentAboutText === 'mission' ? '#B68603' : 'white',
              color: currentAboutText === 'mission' ? 'white' : 'black',
            }}
          >
            Our Mission
          </button>
          <button
            onClick={() => handleClick('values')}
            className={styles['text-content-action']}
            style={{
              backgroundColor:
                currentAboutText === 'values' ? '#B68603' : 'white',
              color: currentAboutText === 'values' ? 'white' : 'black',
            }}
          >
            Our Core Values
          </button>
        </div>
        <p className={styles['text-content']}>{aboutText[currentAboutText]}</p>
      </div>
      <StaffCarousel />
    </div>
  )
}

export default AboutSection
