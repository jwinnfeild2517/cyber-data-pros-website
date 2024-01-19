import React from 'react'
import styles from './jumbo.module.css'
import Image from 'next/image'

const Jumbotron = () => {
  return (
    <div className={styles.jumbotron}>
      <div className={styles.textContainer}>
        <h2 className={styles.slogan}>
          Data Privacy & Security made{' '}
          <span
            style={{
              color: '#0033a0',
            }}
          >
            simple
          </span>
        </h2>
        <p className={styles.slogan2}>
          At CyberData Pros, we understand that keeping up with the changing
          data security and compliance requirements is a full-time job. Our team
          specializes in identifying and remediating security gaps, ensuring
          that your business remains protected against future threats.
        </p>
        <img
          className={styles['jumbo-gif']}
          // priority
          src={'https://media.giphy.com/media/077i6AULCXc0FKTj9s/giphy.gif'}
          alt={''}
          width={50}
          height={50}
        />
      </div>
      <Image
        priority
        style={{
          position: 'absolute',
          right: -50,
          bottom: -120,
          opacity: 0.1,
        }}
        src={'/jumbo-design-asset.svg'}
        alt={''}
        width={900}
        height={900}
      />
    </div>
  )
}

export default Jumbotron
