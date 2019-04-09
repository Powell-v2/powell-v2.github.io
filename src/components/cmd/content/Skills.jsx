import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faSun } from '@fortawesome/free-solid-svg-icons'

export const skills = [
  `Swifly put together a working prototype of a feature/application`,
  `Learn a framework/library when it becomes necessary and adapt to new concepts as they are being introduced`,
  `Write clean, maintainable, thoroughly documented and well tested code`,
  `Get shit done while having fun along the way!`,
]
export const extra = `
  I'm empathetic towards customers and this naturally extends into my desire to deliver high-quality UX. New technologies rouse my curiosity and excite me - at least moderately :] I have tool agnostic mentality when it comes to choosing the most appropriate instrument(s) for the job which allows to detach and clearly evaluate benefits and tradeoffs for the team as well as for the project and its users. Above all else, being pragmatic enables me to identify high-yielding areas to focus on and set clear priorities.
`

const Skills = () => (
  <article className="output--block">
    <p>As the saying goes:</p>
    <div className="saying">
      <div>
        <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
      </div>
      <div>
        <p>
          A jack of all trades is a master of none ... but oftentimes better than a master of one.
        </p>
      </div>
    </div>
    <p>Among other things, I can:</p>
    <ul className="fa-ul">
      {skills.map((skill) => (
        <li key={skill}>
          <span className="fa-li">
            <FontAwesomeIcon icon={faSun} />
          </span>
          {` `}
          {skill}
        </li>
      ))}
    </ul>
    <p>{extra}</p>
  </article>
)

export default Skills
