import React from 'react'

import Link from '../Link'
import { useLockBodyScroll } from "../custom_hooks/useLockBodyScroll"
import ContactLinks from '../ContactLinks'

import styles from './menu_body.module.css'

const pages = [
  {
    name: `Home`,
    to: `/`
  },
  {
    name: `About`,
    to: `/about`
  },
  {
    name: `Blog`,
    to: `/blog`
  },
  {
    name: `Terminal`,
    to: `/cmd`
  },
]

const MenuBody = () => {
  useLockBodyScroll()

  return (
    <section className={styles.menuContainer}>
      <ul className={styles.pageLinksListWrapper}>
        {pages.map(({ name, to }) => (
          <li
            key={name}
            className={styles.pageLinkItem}
          >
            <Link
              to={to}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <section className={styles.contactSection}>
        <ContactLinks
          iconsOnly
        />
      </section>
    </section>
  )
}

export default MenuBody
