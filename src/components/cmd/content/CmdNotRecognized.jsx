import React from 'react'

const CmdNotRecognized = () => (
  <p>
    {String.raw`
      Sorry, but your command wasn't recognized. Type
    `}
    {` `}
    <span className="bold">powell --help</span>
    {` `}
    and hit
    {` `}
    <span className="italic">Run</span>
    {` `}
    to reveal the list of all available commands.
  </p>
)

export default CmdNotRecognized
