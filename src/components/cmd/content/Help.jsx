import React from 'react'

const content = [
  {
    flag: `-a or --about`,
    description: `Self-intro.`,
  },
  {
    flag: `-q or --quit`,
    description: `Quit terminal.`,
  },
  // {
  //   flag: `-s or --skills`,
  //   description: `Describe professional skills.`,
  // },
  {
    flag: `-l or --links`,
    description: `Output contact and profile links.`,
  },
  {
    flag: `-b or --blog`,
    description: `Show most recent blog posts.`,
  },
  {
    flag: `-v or --version`,
    description: `Display powell's version.`,
  },
  {
    flag: `-h or --help`,
    description: `Display list of all available commands.`,
  },
]

const Help = () => (
  <article className="output--block help">
    <p>
      <span className="bold">Usage:</span>
      {` `}
      powell [options]
    </p>
    <p>
      <span className="bold">Example:</span>
      {` `}
      powell -a
    </p>
    <p><span className="bold">Options:</span></p>
    <table>
      <tbody>
        {content.map(({ flag, description }) => (
          <tr key={description}>
            <td>{flag}</td>
            <td>{description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </article>
)

export default Help
