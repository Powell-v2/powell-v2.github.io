import React from 'react'
import { css } from '@emotion/core'

export const intro = `
Hi there! 👋 I'm Pavel, a product-minded, backend-focused fullstack engineer with a keen interest in ML.
`
export const keyFacts = [
  `💪 8+ years of diverse experience building robust web applications primarily with TypeScript, Node, Python, React and AWS.`,
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
        {keyFacts.map((fact) => (
          <li key={fact}>
            {fact}
          </li>
        ))}
      </ul>
    </div>
  </article>
)

export default AboutMe
