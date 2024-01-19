'use client'
import React, { useState } from 'react'
import styles from './faq.module.css'
import Image from 'next/image'
import Link from 'next/link'

const faqData = [
  {
    question: `Why does my organization need cybersecurity consulting services? We haven't had any problems.`,
    answer: `You may not have encountered issues thus far, but the reality is that many only recognize the importance of prioritizing privacy, security, and compliance after experiencing a compromise. Our role is to proactively identify potential areas of concern before they escalate into problems, ensuring a proactive and preventative approach to protecting your assets.`,
  },
  {
    question: `Our client has suggested that we require [insert certification here]. Can you provide support?`,
    answer: `Certainly, it's highly probable that we can assist you in obtaining certification. Whether ISO compliance, SOC, HIPAA, or PCI requirements, our aim is to educate you on the significance of responsibly managing sensitive information. We emphasize the importance of adopting an ethical stance as the best policy.`,
  },
  {
    question: `What sets your cybersecurity consulting firm apart from others?`,
    answer: `Our team includes highly skilled professionals with extensive experience in the field. We prioritize a personalized approach, tailoring our services to the specific needs of each client. In addition to keeping up with the latest threats and technologies, our ongoing commitment involves continuous education and certifications. This dedication guarentees that our solutions remain efficient and effective.`,
  },
  {
    question: `I'm located outside of the US, can you still help?`,
    answer: `Our cybersecurity consulting services are not limited to any specific geographical location or the size of your organization. We can tailor our solutions to meet your specific needs. Our commitment to enhancing security extends to organizations of all sizes, ensuring that regardless of your location or scale, we are here to assist you in protecting uarding your assets. Rely on us to strengthen your security, so you can run a successful business. With CyberData Pros by your side, you can stay ahead of the threats before they start.`,
  },
  // Add more questions and answers as needed
]

const FaqContainer = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(
    null,
  )

  const setActiveQuestion = (activeQuestionIndex: number) => {
    setActiveQuestionIndex(activeQuestionIndex)
  }

  return (
    <div className={styles['faq-container']}>
      <div className={styles['faq-info']}>
        <h3 className={styles['faq-header']}>Frequently Asked Questions</h3>
        <p className={styles['faq-subheader']}>
          More burning questions? Feel free to contact us for more information.
        </p>
        <Link href={'/contact'} className={styles['faq-contact-button']}>
          Get in Touch
        </Link>
      </div>
      <div className={styles['faq-questions-list']}>
        {faqData.map(({ question, answer }, index) => {
          return (
            <div className={styles['faq-question-container']} key={index}>
              <button
                className={styles['faq-question']}
                onClick={() => setActiveQuestion(index)}
              >
                {question}
                <Image
                  src={'/plus-icon.png'}
                  alt={'open question'}
                  width={18}
                  height={18}
                />
              </button>
              {activeQuestionIndex === index && (
                <p className={styles['faq-answer']}>{answer}</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FaqContainer
