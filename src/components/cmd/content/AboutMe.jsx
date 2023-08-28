import React from 'react'
import { css } from '@emotion/core'

export const intro = `
Hey there! Thanks for dropping in. My name is Pavel Yermolin. I'm a versatile fullstack engineer passionate about pragmatic programming and delivering delightful user experiences.
`
export const goals = [
  `💪 6+ years of experience building rich and robust applications in TypeScript, React and Node`,
  `🙌 Skillful collaborator and proactive communicator who works effectively in cross-functional teams`,
  `🦸 Resourceful problem solver who loves to ship solutions quickly and often while keeping user needs at the forefront`,
  `⚡ Comfortable navigating in a complex codebase and delivering across the stack`,
  `⚓ Strong sense of ownership and responsibility`,
  `✌️ Relentless about maintaining positive and inclusive work culture`,
  `🤝 Willing to mentor and be mentored`,
  `💪 Bar raiser who thrives in a dynamic environment`,
  `🤓 Life-long learner`,
  `😎 Fun and easy to work with`
]

const factsListCss = css`
  margin-left: 1.5rem;
`

const AboutMe = () => (
  <article className="output--block">
    <p>{intro}</p>
    <div>
      <p>Key facts about me:</p>
      <ul css={factsListCss}>
        {goals.map((goal) => (
          <li key={goal}>
            {goal}
          </li>
        ))}
      </ul>
    </div>
  </article>
)

export default AboutMe
