'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CarouselWrapper from '../carousel/CarouselWrapper'
import { complianceBadges } from '@/data/compliancebadges'

const listItems = complianceBadges.map(({ title, image, color }, index) => (
  <div key={title}>
    <div
      style={{
        backgroundColor: color,
        border: '1px solid #B58500',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
      }}
    >
      <Image
        key={Math.random()}
        src={image}
        width={100}
        height={100}
        alt={''}
      />
      <p
        style={{
          fontSize: 16,
          fontWeight: 600,
          marginTop: 3,
          textTransform: 'uppercase',
        }}
      >
        {title}
      </p>
    </div>
  </div>
))

const ComplianceCarorusel = () => {
  return (
    <CarouselWrapper
      style={{
        background: 'radial-gradient(#3ea8e4, #a8b5cd)',
        borderTop: '5px solid #B58500',
        borderBottom: '5px solid #B58500',
        height: 165,
      }}
      settings={{
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 5000,
        cssEase: 'linear',
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 2000,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            },
          },
          // {
          //   breakpoint: 700,
          //   settings: {
          //     slidesToShow: 5,
          //     slidesToScroll: 1,
          //   },
          // },
          // {
          //   breakpoint: 500,
          //   settings: {
          //     slidesToShow: 5,
          //     slidesToScroll: 1,
          //   },
          // },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }}
    >
      {listItems}
    </CarouselWrapper>
  )
}

export default ComplianceCarorusel
