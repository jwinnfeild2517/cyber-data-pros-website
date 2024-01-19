import {
  ServicePageType,
  ServicesType,
  servicesData,
} from '@/data/serviceLinks'
import React from 'react'
import styles from './footer.module.css'

type ServiceKeyType = keyof ServicesType
const ServiceLinksCollection = ({
  serviceTitle,
}: {
  serviceTitle: ServiceKeyType
}) => {
  const serviceItemsList = Object.keys(servicesData[serviceTitle])

  return (
    <div>
      <span className={styles['list-header']}>{serviceTitle}</span>
      <ul className={styles['listWrapper']}>
        {serviceItemsList.map((item) => {
          console.log(item)

          return (
            <li key={item} className={styles['list-item']}>
              <a href="/">{servicesData[serviceTitle][item].title}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ServiceLinksCollection
