import React from 'react'

import Link from '../Link'
import { useLockBodyScroll } from "../custom_hooks/useLockBodyScroll"
import ContactLinks from '../ContactLinks'

import styles from './MenuBody.module.css'

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
            className={`${styles.pageLinkItem} ${styles.glowOnHover}`}
          >
            <Link
              to={to}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.contactSection}>
        <ContactLinks
          iconsOnly
        />
      </ul>
    </section>
  )
}

export default MenuBody
