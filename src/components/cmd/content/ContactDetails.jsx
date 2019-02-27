import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

const mediums = [
  {
    icon: <FontAwesomeIcon icon={faGithub} />,
    href: `https://github.com/Powell-v2`,
    name: `GitHub`,
  },
  {
    icon: <FontAwesomeIcon icon={faStackOverflow} />,
    href: `http://stackoverflow.com/story/powell-v2`,
    name: `StackOverflow`,
  },
  {
    icon: <FontAwesomeIcon icon={faPaperPlane} />,
    href: `https://t.me/keepiteasy`,
    name: `Telegram`,
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    href: `mailto:ermolinpv@gmail.com`,
    name: `Email`,
  },
]

const ContactDetails = () => (
  <article className="output--block">
    <p>Get in touch:</p>
    <ul className="fa-ul">
      {mediums.map(({ icon, href, name }) => (
        <li key={name}>
          <span className="fa-li">{icon}</span>
          <a href={href} target={name === `Email` ? null : `_blank`}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  </article>
)

export default ContactDetails
