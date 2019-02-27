import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

const intro = `
  Salute, my name is Pavel. I'm a versatile JavaScript engineer dedicated to lifelong learning. I like working solo as much as playing on a team. You can always expect me to be transparent about progress on tasks while seeking feedback early and often. I enjoy exchanging knowledge with others and believe that trust and respect are at the root of all great teamwork.
`
const goals = [
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
  <>
    <p>{intro}</p>
    <p>My personal goals have never changed:</p>
    <ul className="fa-ul">
      {goals.map(goal => (
        <li key={goal}>
          <span className="fa-li">
            <FontAwesomeIcon icon={faSun} />
          </span>
          {` `}
          {goal}
        </li>
      ))}
    </ul>
  </>
)

export default AboutMe
