'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import MenuItem from './MenuItem'

export type MenuType = {
  home: Array<string>
  services: Array<string>
  resources: Array<string>
}
export const menuArray: MenuType = {
  home: [],
  services: ['Audit Testing', 'Penetration'],
  resources: ['cases', 'blog'],
}

const MobileNav = ({ handleNavClose }: { handleNavClose: () => void }) => {
  const [expandedMenuitem, setExpandedMenuitem] =
    useState<keyof MenuType>('home')

  const handleDropdownClick = (menuItem: keyof MenuType) => {
    setExpandedMenuitem(menuItem)
  }

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 210,
        height: '100vh',
        width: '100vw',
        backgroundColor: '#0033A0',
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
        />
        <Image
          src={'/close-menu-icon.png'}
          onClick={() => handleNavClose()}
          alt={'company logo'}
          width={18}
          height={18}
        />
      </div>
      <nav
        style={{
          marginTop: 85,
        }}
      >
        {Object.keys(menuArray).map((menuItem) => (
          <MenuItem
            dropDownClick={handleDropdownClick}
            expandedMenuitem={expandedMenuitem}
            menuItem={menuItem as keyof MenuType}
          />
        ))}
      </nav>
    </div>
  )
}

export default MobileNav
