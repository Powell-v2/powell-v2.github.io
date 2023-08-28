import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

export const intro = `
Salute, my name is Pavel Yermolin. I'm a versatile fullstack engineer passionate about pragmatic programming and delivering delightful user experiences.
`
export const goals = [
  `Do exceptional work`,
  `Have fun`,
  `Experiment`,
  `Treat people right`,
  `Tell the truth`,
  `Have a positive impact on the world around me`,
  `Give back`,
  `Keep learning`,
]

const AboutMe = () => (
  <article className="output--block">
    <p>{intro}</p>
    <p>My personal goals have never changed:</p>
    <ul className="fa-ul">
      {goals.map((goal) => (
        <li key={goal}>
          <span className="fa-li">
            <FontAwesomeIcon icon={faSun} />
          </span>
          {` `}
          {goal}
        </li>
      ))}
    </ul>
  </article>
)

export default AboutMe
