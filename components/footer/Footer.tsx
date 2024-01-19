'use client'
import React, { useState } from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import { servicesData, ServicesType } from '@/data/serviceLinks'
import Link from 'next/link'

type ServiceKeyType = keyof ServicesType

const services = Object.keys(servicesData) as Array<ServiceKeyType>

const socialIcons = [
  '/instagram-icon.png',
  '/twitter-x-icon.png',
  '/link-in-icon.png',
  '/facebook-icon.png',
]

const ServiceLinksCollection = ({
  serviceTitle,
}: {
  serviceTitle: ServiceKeyType
}) => {
  const serviceItemsList = Object.keys(servicesData[serviceTitle])

  return (
    <div className={styles['list-wrapper']}>
      <Link href={`/service/${serviceTitle}`} className={styles['list-header']}>
        {serviceTitle}
      </Link>
      <ul className={styles['list']}>
        {serviceItemsList.map((item) => {
          const { title } = servicesData[serviceTitle][item]
          return (
            <li key={item} className={styles['list-item']}>
              <Link href={`/service/${serviceTitle}/${title}`}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
const Footer = () => {
  return (
    <footer className={styles['footer-wrapper']}>
      <div className={styles['footer-content']}>
        <div className={styles['list-wrapper']}>
          <Image
            className={styles['logo']}
            src={'/logo-mobile.png'}
            alt={'company logo'}
            width={250}
            height={125}
          />
          <p
            style={{
              color: '#84878b',
              marginTop: 50,
              marginBottom: 20,
              textAlign: 'left',
              fontSize: 18,
            }}
          >
            Data Privacy and & Secuirty Made Simple
          </p>
          <div className={styles['social-icons']}>
            {socialIcons.map((i) => (
              <Image
                style={{
                  marginRight: 10,
                }}
                key={i}
                src={`${i}`}
                alt={'company logo'}
                width={35}
                height={35}
              />
            ))}
          </div>
        </div>
        {services.map((service) => (
          <ServiceLinksCollection key={service} serviceTitle={service} />
        ))}
      </div>
      <p
        style={{
          fontSize: 14,
          color: '#84878b',
        }}
      >
        &copy; 2024 CyberData Pros. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
