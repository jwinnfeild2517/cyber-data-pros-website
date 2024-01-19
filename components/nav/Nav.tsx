'use client'

import React, { useEffect, useLayoutEffect, useState } from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import styles from './nav.module.css'
import Image from 'next/image'
import useWindowDimensions from '@/utils/useWindowDemensions'
import { ServicesType, servicesData } from '@/data/serviceLinks'
import Link from 'next/link'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode | null,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const getServiceItemLinks = (service: keyof ServicesType) => {
  const Links = Object.keys(servicesData[service]).map((key) => {
    const { title } = servicesData[service][key]
    return getItem(
      <Link href={`/service/${service}/${title}`}>
        {servicesData[service][key].title}
      </Link>,
      `${service}-${key}`,
      <></>,
    )
  })
  return Links
}

const items: MenuItem[] = [
  getItem(
    <Link href={'/'} style={{}}>
      Home
    </Link>,
    'hme',
    <></>,
  ),
  getItem('Services', 'services', <></>, [
    getItem(
      'Cybersecurity',
      'cyber-header',
      <></>,
      getServiceItemLinks('cybersecurity'),
    ),
    getItem('Privacy', 'privacy-header', <></>, getServiceItemLinks('privacy')),
    getItem(
      'Compliance',
      'compliance-header',
      <></>,
      getServiceItemLinks('compliance'),
    ),
    getItem(
      'Consulting',
      'consulting-header',
      <></>,
      getServiceItemLinks('consulting'),
    ),
  ]),
  getItem('Resources', 'resources', <></>, [
    getItem(<Link href={`/blogs`}>Blogs</Link>, 'bgs', <></>),
    getItem('Guides', 'guide', <></>),
    getItem('Case Studies', 'csd', <></>),
    getItem('Newsletter', 'nsl', <></>),
    getItem('Video Center', 'vict', <></>),
    getItem('2024 Predictions', '24p', <></>),
  ]),
  getItem(
    <a
      href="/contact"
      style={{
        backgroundColor: '#0886D6',
        padding: '5px 20px',
        color: 'white',
        borderRadius: '5px',
      }}
    >
      Contact
    </a>,
    'contact',
    <></>,
  ),
]

const onClick: MenuProps['onClick'] = (e) => {}

const Nav = ({
  showMobileNav,
  triggerMobileNav,
  windowSize,
}: {
  showMobileNav: boolean
  triggerMobileNav: () => void
  windowSize: number
}) => {
  const [color, setColor] = useState('#ffffff2e')

  const listenScrollEvent = () => {
    if (window.scrollY < 45) {
      setColor('#ffffff2e')
    } else {
      setColor('white')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)

    return () => window.removeEventListener('scroll', () => {})
  }, [])

  if (windowSize === 0) {
    return (
      <div
        className={styles['nav-wrapper']}
        style={{
          backgroundColor: color,
        }}
      ></div>
    )
  }

  if (showMobileNav) {
    return (
      <div
        style={{
          position: 'fixed',
          zIndex: 210,
          height: '100vh',
          width: '100vw',
          backgroundColor: '#0033A0',
          overflow: 'scroll',
          paddingBottom: '50px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: '10px',
            position: 'absolute',
            top: -35,
            left: -10,
            width: '100%',
          }}
        >
          <Image
            src={'/logo-mobile.png'}
            alt={'company logo'}
            width={260}
            height={130}
            priority
          />
          <Image
            src={'/close-menu-icon.png'}
            onClick={() => triggerMobileNav()}
            alt={'company logo'}
            width={18}
            height={18}
          />
        </div>
        <Menu
          onClick={onClick}
          triggerSubMenuAction="click"
          multiple={false}
          style={{
            listStyleType: 'none',
            width: '100%',
            fontSize: 16,
            fontWeight: 500,
            textTransform: 'capitalize',
            fontFamily: 'Poppins, sans-serif',
            backgroundColor: 'transparent',
            color: 'white',
            marginTop: 85,
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'space-between',
          }}
          mode="inline"
          // theme="dark"
          items={items}
        />
      </div>
    )
  }

  return (
    <div
      className={styles['nav-wrapper']}
      style={{
        backgroundColor: color,
      }}
    >
      <Image
        style={{
          marginRight: 50,
        }}
        src={'/cdp-logo.png'}
        alt={'company logo'}
        width={180}
        height={90}
      />
      {windowSize < 800 ? (
        <Image
          src={'/open-menu-icon.png'}
          onClick={() => triggerMobileNav()}
          alt={'company logo'}
          width={25}
          height={25}
          priority
        />
      ) : (
        <Menu
          onClick={onClick}
          triggerSubMenuAction="click"
          style={{
            background: 'transparent',
            listStyleType: 'none',
            // width: '100%',
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'space-between',
          }}
          mode="horizontal"
          items={items}
        />
      )}
    </div>
  )
}

export default Nav
