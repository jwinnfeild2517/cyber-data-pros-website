import React, { useEffect, useRef, useState } from 'react'
import useWindowDimensions from '@/utils/useWindowDemensions'
import styles from './staff.module.css'
import Image from 'next/image'
import { staffArray } from '@/data/staffData'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'

const getNumPerGroup = (width: number) => {
  switch (true) {
    case width > 768:
      return width * 0.6
    case width > 1450:
      return 800
    default:
      return width
  }
}

const carouselSettings = {
  slidesToShow: 4,
  dots: false,
  infinite: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
}

const StaffCarousel = () => {
  const { width } = useWindowDimensions()
  const ref = useRef<CarouselRef>(null)
  const [loading, setloading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 773,
        }}
      >
        ..loading
      </div>
    )
  }

  return (
    <div className={styles['staff-section-wrapper']}>
      <h3 className={styles['staff-section-header']}>Meet The Team</h3>
      <div className={styles['staff-container']}>
        <div className={styles['carousel-headers-container']}>
          <p className={styles['staff-carousel-header']}>
            Passionate Professionals Providing{' '}
            <span
              style={{
                color: '#001a5',
              }}
            >
              Excellence
            </span>
            s
          </p>

          <p className={styles['staff-carousel-subheader']}>
            At our company, our team is comprised of individuals who bring a
            wealth of expertise, creativity, and personalization to every
            project. Get to know the faces behind the innovation as we introduce
            you to the incredible people shaping the success of our company.
          </p>
        </div>
        <Carousel
          ref={ref}
          style={{
            maxWidth: getNumPerGroup(width),
          }}
          {...carouselSettings}
        >
          {staffArray.map(({ name, title, image }, index) => (
            <div key={index}>
              <div className={styles['staff-card']}>
                <div className={styles['overlay-container']}></div>
                <Image
                  src={image}
                  width={300}
                  height={375}
                  alt={'profile-pic'}
                  className={styles['profile-pic']}
                />
                <div className={styles['staff-content-container']}>
                  <p className={styles['staff-name']}>{name}</p>
                  <p className={styles['staff-title']}>{title}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
            gap: 14,
          }}
        >
          <Image
            onClick={() => {
              ref.current?.prev()
            }}
            className={styles['carousel-prev-button']}
            src={'/arrow2.png'}
            width={35}
            height={35}
            alt={'arrow'}
          />
          <Image
            onClick={() => {
              ref.current?.next()
            }}
            className={styles['carousel-next-button']}
            src={'/arrow2.png'}
            width={35}
            height={35}
            alt={'arrow'}
          />
        </div>
      </div>
    </div>
  )
}

export default StaffCarousel
