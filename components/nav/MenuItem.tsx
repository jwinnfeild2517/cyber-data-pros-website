import React from 'react'
import { MenuType, menuArray } from './MobileNav'

const MenuItem = ({
  dropDownClick,
  menuItem,
  expandedMenuitem,
}: {
  dropDownClick: (item: keyof MenuType) => void
  menuItem: keyof MenuType
  expandedMenuitem: keyof MenuType
}) => {
  const showDropDown = menuArray[menuItem].length > 0
  const isCurrentDropDown = expandedMenuitem === menuItem

  console.log(menuItem)

  return (
    <ul
      style={{
        listStyleType: 'none',
        color: 'white',
      }}
    >
      <li
        style={{
          padding: 20,
          paddingLeft: 20,
          paddingRight: 20,
          borderBottom: '1px solid #B58500',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          textTransform: 'capitalize',
          color: isCurrentDropDown && showDropDown ? 'gold' : 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <p>{menuItem}</p>
          {showDropDown && (
            <button
              onClick={() =>
                dropDownClick(isCurrentDropDown ? 'home' : menuItem)
              }
            >
              {isCurrentDropDown ? 'Close' : 'Open'}
            </button>
          )}
        </div>
      </li>
      {menuArray[menuItem].map((name, index) => {
        if (isCurrentDropDown) {
          return (
            <li
              key={name}
              style={{
                padding: 20,
                paddingLeft: 20,
                paddingRight: 20,
                borderBottom: '1px solid #B58500',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                textTransform: 'capitalize',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p>{name}</p>
              </div>
            </li>
          )
        }
      })}
    </ul>
  )
}

export default MenuItem
