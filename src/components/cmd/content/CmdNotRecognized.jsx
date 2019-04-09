import React from 'react'

const CmdNotRecognized = () => (
  <p>
    Sorry, but your command wasn&apos;t recognized. To see the full list of available commands, type
    {` `}
    <span className="bold">powell -h</span>
    {` `}
    into the command line and hit
    {` `}
    <span className="italic">Run</span>
    .
  </p>
)

export default CmdNotRecognized
