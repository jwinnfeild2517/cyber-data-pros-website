import ServicePage from '@/components/page/ServicePage'
import { ServicesType } from '@/data/serviceLinks'
import React from 'react'
type ServiceKeyType = keyof ServicesType

const page = async ({ params }: { params: { slug: ServiceKeyType } }) => {
  return <ServicePage serviceKey={params.slug} />
}

export default page
