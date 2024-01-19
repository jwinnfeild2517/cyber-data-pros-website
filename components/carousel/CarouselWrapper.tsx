'use client'

import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Carousel, CarouselProps, Spin, Flex } from 'antd'
import styles from './carousel.module.css'
import useWindowDimensions from '@/utils/useWindowDemensions'
import Image from 'next/image'
import { CarouselRef } from 'antd/es/carousel'

const CarouselWrapper = ({
  children,
  header,
  subheader,
  style = {
    backgroundColor: '#0f1420',
  },
  maxWidth = 1280,
  headerStyles,
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
  },
}: {
  children: ReactNode
  header?: string
  subheader?: string
  backgroundColor?: string
  headerStyles?: {
    header: string
    subheader: string
  }
  settings?: CarouselProps
  maxWidth?: number
  style?: React.CSSProperties
}) => {
  const ref = useRef<CarouselRef>(null)
  const { height, width } = useWindowDimensions()
  const [loading, setloading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (loading) {
    return (
      <div
        style={{
          height: style.height,
          background: style.background,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        ...Loading
      </div>
    )
  }

  return (
    <div className={styles['container']} style={style}>
      {header && (
        <p
          className={styles['carousel-header']}
          style={{
            color: headerStyles?.header,
          }}
        >
          {header}
        </p>
      )}
      {subheader && (
        <p
          className={styles['carousel-subheader']}
          style={{
            color: headerStyles?.subheader,
          }}
        >
          {subheader}
        </p>
      )}
      <Carousel
        ref={ref}
        style={{
          maxWidth: maxWidth ? maxWidth : width,
          paddingLeft: settings.slidesToShow === 1 ? 40 : 18,
          paddingRight: settings.slidesToShow === 1 ? 40 : 18,
        }}
        {...settings}
      >
        {children}
      </Carousel>
      {settings.arrows && (
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
      )}
    </div>
  )
}

export default CarouselWrapper
