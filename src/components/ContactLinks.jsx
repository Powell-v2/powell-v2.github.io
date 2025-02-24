import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaperPlane, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  // faStackOverflow,
  faLinkedinIn,
  faGithubAlt
} from '@fortawesome/free-brands-svg-icons'

import Link from './Link'

const contacts = [
  //   {
  //     icon: faPaperPlane,
  //     href: `https://t.me/keepiteasy`,
  //     name: `Telegram`,
  //   },
  //   {
  //     icon: faEnvelope,
  //     href: `mailto:ermolinpv@gmail.com`,
  //     name: `Email`,
  //   },
]

const profiles = [
  {
    icon: faGithubAlt,
    href: `https://github.com/Powell-v2`,
    name: `GitHub`,
  },
  {
    icon: faLinkedinIn,
    href: `https://www.linkedin.com/in/pavel-yermolin/`,
    name: `LinkedIn`,
  },
  // {
  //   icon: faStackOverflow,
  //   href: `https://stackoverflow.com/users/7200363/pa-ye`,
  //   name: `StackOverflow`,
  // },
]

const containerCss = css`
  display: grid;
  gap: 1.5rem;
`

const ContactLinks = (props) => {
  const {
    iconSize,
    listStyle,
    linkStyle,
    displayName,
    iconsOnly,
  } = props

  function renderContactLinks() {
    return contacts.map(({ href, icon, name }) => {
      const iconComp = (
        <FontAwesomeIcon
          fixedWidth
          size={iconSize}
          icon={icon}
          alt={name}
        />
      )
      const isEmail = href.startsWith(`mailto`)

      return (
        <li key={name}>
          {displayName && iconComp}
          <Link
            key={name}
            css={linkStyle}
            href={href}
            target={isEmail ? null : `_blank`}
          >
            {displayName ? name : iconComp}
          </Link>
        </li>
      )
    })
  }

  function renderProfileLinks() {
    return profiles.map(({ href, icon, name }) => {
      const iconComp = (
        <FontAwesomeIcon
          fixedWidth
          size={iconSize}
          icon={icon}
          alt={name}
        />
      )
      const isEmail = href.startsWith(`mailto`)

      return (
        <li key={name}>
          {displayName && iconComp}
          <Link
            key={name}
            css={linkStyle}
            href={href}
            target={isEmail ? null : `_blank`}
          >
            {displayName ? name : iconComp}
          </Link>
        </li>
      )
    })
  }

  if (iconsOnly) {
    return (
      <>
        {renderProfileLinks()}
        {renderContactLinks()}
      </>
    )
  }

  return (
    <div css={containerCss}>
      <div>
        <p>Get in touch:</p>
        <ul css={listStyle}>
          {renderContactLinks()}
        </ul>
      </div>
      <div>
        <p>Profiles:</p>
        <ul css={listStyle}>
          {renderProfileLinks()}
        </ul>
      </div>
    </div>
  )
}

ContactLinks.propTypes = {
  iconSize: PropTypes.string,
  listStyle: PropTypes.arrayOf(PropTypes.object),
  linkStyle: PropTypes.arrayOf(PropTypes.object),
  displayName: PropTypes.bool,
  iconsOnly: PropTypes.bool,
}

ContactLinks.defaultProps = {
  iconSize: "1x",
  listStyle: [],
  linkStyle: [],
  displayName: false,
  iconsOnly: false,
}

export default ContactLinks
