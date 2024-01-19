import React from 'react'
import styles from '../../../styles/service-page.module.css'
import PageWrapper from '@/components/page/PageWrapper'
import { ServicesType, servicesData } from '@/data/serviceLinks'
import Link from 'next/link'

type ServiceKeyType = keyof ServicesType
const ServicePage = async ({
  params,
}: {
  params: { slug: ServiceKeyType }
}) => {
  const serviceItems = Object.keys(servicesData[params.slug])
  const serviceTitle = params.slug
  return (
    <PageWrapper>
      <div className={styles['content-wrapper']}>
        <div className={styles['text-container']}>
          <div>
            <h1 className={styles['heading']}>{serviceTitle}</h1>
            <p>
              As the world shifts to one that is increasingly digital and
              data-driven, the need to protect your data is greater than ever
              before. Thankfully, there are compliance standards to help you
              know exactly what needs to be done. A simple incidence of
              noncompliance has never been more costly to your reputation and
              balance sheet, and we’re here to help make sure that doesn’t
              happen
            </p>
            <p>
              Being fully compliant with data security regulations depends on
              your industry. It also depends on the types of sensitive data
              you’re collecting and how that data is being handled.
            </p>
            <p>
              Being compliant means your business will need to implement a
              series of data management systems that provide security and
              protection at the data level. This is typically known as
              information security management systems (ISMS).
            </p>
            <p>
              ISO 27001 is the most widely recognized data security standard for
              businesses, and we have lots of experience dealing with ISO
              compliance. Being compliant with ISO 27001 shows potential
              customers and clients that you’re a safe group to do business
              with. More importantly, you’ll have the certification to prove it
            </p>
            <></>
            <button></button>
          </div>
          <div className={styles['certs-list-container']}>
            <p>
              We help you keep up with the latest industry requirements and best
              practices
            </p>
            <ul className={styles['certs-list']}>
              {serviceItems.map((item) => {
                const { title } = servicesData[serviceTitle][item]
                return (
                  <li key={item}>
                    <Link href={`/service/${serviceTitle}/${title}`}>
                      {title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className={styles['certs-list-design-asset']}></div>
      </div>
    </PageWrapper>
  )
}

export default ServicePage
