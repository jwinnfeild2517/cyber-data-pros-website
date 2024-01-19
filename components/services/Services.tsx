import React from 'react'
import styles from './services.module.css'
import Image from 'next/image'
import Link from 'next/link'
import servicesArray from '@/data/services'

const Services = () => {
  return (
    <div className={styles['services-container']}>
      <span className={styles['heading']}>Browse Our services</span>
      <p className={styles['sub-heading']}>
        Regardless of whether your business is small or large, located in the US
        or abroad, our approach guarantees that we meet your security
        requirements, perfectly customized for your business.
      </p>
      <div className={styles['cards-container']}>
        {servicesArray.map(({ imgPath, title, description }) => (
          <Link
            href={`/service/${encodeURIComponent(title)}`}
            className={styles['service-card']}
            key={title}
            style={{
              position: 'relative',
            }}
          >
            {/* <Image
              src={imgPath}
              className={styles['card-image']}
              width={50}
              height={50}
              alt="design-asset"
            /> */}
            <h4 className={styles['service-title']}>{title}</h4>
            <p className={styles['service-description']}>{description}</p>
            <span className={styles['learn-text']}>Learn More</span>
          </Link>
        ))}
      </div>
      <Image
        className={styles['image-2']}
        src="/design-asset-2.png"
        width={300}
        height={300}
        alt="design-asset"
      />
    </div>
  )
}

export default Services
