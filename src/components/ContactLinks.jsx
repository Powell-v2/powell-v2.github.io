import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

import Link from './Link'

const contacts = [
  {
    icon: faPaperPlane,
    href: `https://t.me/keepiteasy`,
    name: `Telegram`,
  },
  {
    icon: faEnvelope,
    href: `mailto:ermolinpv@gmail.com`,
    name: `Email`,
  },
]

const profiles = [
  {
    icon: faGithub,
    href: `https://github.com/Powell-v2`,
    name: `GitHub`,
  },
  {
    icon: faStackOverflow,
    href: `https://stackoverflow.com/users/7200363/pa-ye`,
    name: `StackOverflow`,
  },
]

const containerCss = css`
  display: grid;
  gap: 1.5rem;
`

const ContactLinks = ({
  iconSize,
  listStyle,
  linkStyle,
  displayName
}) => (
  <div css={containerCss}>
    <div>
      <p>Get in touch:</p>
      <ul css={listStyle}>
        {contacts.map(({ href, icon, name }) => {
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
        })}
      </ul>
    </div>
    <div>
      <p>Profiles:</p>
      <ul css={listStyle}>
        {profiles.map(({ href, icon, name }) => {
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
        })}
      </ul>
    </div>
  </div>
)

ContactLinks.propTypes = {
  iconSize: PropTypes.string,
  displayName: PropTypes.bool,
  listStyle: PropTypes.arrayOf(PropTypes.object),
  linkStyle: PropTypes.arrayOf(PropTypes.object),
}

ContactLinks.defaultProps = {
  iconSize: "1x",
  displayName: false,
  listStyle: [],
  linkStyle: [],
}

export default ContactLinks
