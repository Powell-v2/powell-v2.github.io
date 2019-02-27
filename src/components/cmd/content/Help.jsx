import React from 'react'

const content = [
  {
    flag: `-a or --about`,
    description: `Self-intro.`,
  },
  {
    flag: `-s or --skills`,
    description: `My professional skills.`,
  },
  {
    flag: `-c or --contact`,
    description: `Find out how to contact me.`,
  },
  {
    flag: `-b or --blog`,
    description: `Shows most recent blog posts.`,
  },
  {
    flag: `-v or --version`,
    description: `Displays powell's version.`,
  },
  {
    flag: `-h or --help`,
    description: `Displays list of all available commands.`,
  },
]

const Help = () => (
  <>
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
  </>
)

export default Help
