import React from 'react'

const CmdEmpty = () => (
  <p>
    Terminal expects a command to be entered. To see the full list of available commands, type
    {` `}
    <span className="bold">powell -h</span>
    {` `}
    into the command line and hit
    {` `}
    <span className="italic">Run</span>
.
  </p>
)

export default CmdEmpty
