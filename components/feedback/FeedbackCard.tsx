import React from 'react'
import styles from './feedback.module.css'

const FeedbackCard = ({
  text,
  name,
  title,
}: {
  text: string
  name: string
  title: string
}) => {
  return (
    <div className={styles['feedback-item']}>
      <p className={styles['feedback-text']}>{text}</p>
      <p className={styles['feedback-client-name']}>{name}</p>
      <p className={styles['feedback-client-title']}>{title}</p>
    </div>
  )
}

export default FeedbackCard
