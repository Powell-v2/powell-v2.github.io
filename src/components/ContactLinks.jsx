import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

import Link from './Link'

const mediums = [
  {
    icon: faGithub,
    href: `https://github.com/Powell-v2`,
    name: `GitHub`,
  },
  {
    icon: faStackOverflow,
    href: `http://stackoverflow.com/story/powell-v2`,
    name: `StackOverflow`,
  },
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

const ContactLinks = ({
  iconSize,
  pullIcon,
  listStyle,
  linkStyle,
  displayName
}) => (
  <ul css={listStyle}>
    {mediums.map(({ href, icon, name }) => {
      const iconComp = (
        <FontAwesomeIcon
          fixedWidth
          pull={pullIcon}
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
            rel={isEmail ? null : `noopener noreferrer`}
          >
            {displayName ? name : iconComp}
          </Link>
        </li>
      ) })}
  </ul>
)

ContactLinks.propTypes = {
  iconSize: PropTypes.string,
  pullIcon: PropTypes.string,
  displayName: PropTypes.bool,
  listStyle: PropTypes.arrayOf(PropTypes.object),
  linkStyle: PropTypes.arrayOf(PropTypes.object),
}

ContactLinks.defaultProps = {
  iconSize: "1x",
  pullIcon: null,
  displayName: false,
  listStyle: [],
  linkStyle: [],
}

export default ContactLinks
