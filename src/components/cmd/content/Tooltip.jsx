import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const Tooltip = () => (
  <p>
    <FontAwesomeIcon icon={faInfoCircle} />
    {` `}
    <span className="bold">powell -h</span>
    {` `}
    command reveals the list of all available actions.
  </p>
)


export default Tooltip
