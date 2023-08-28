/* eslint-disable no-useless-escape */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const powellASCII = String.raw`
   _______    ______    __   __  ___   _______  ___      ___       
  |   __ "\  /    " \  |"  |/  \|  "| /"     "||"  |    |"  |      
  (. |__) :)// ____  \ |'  /    \:  |(: ______)||  |    ||  |      
  |:  ____//  /    ) :)|: /'        | \/    |  |:  |    |:  |      
  (|  /   (: (____/ //  \//  /\'    | // ___)_  \  |___  \  |___   
 /|__/ \   \        /   /   /  \\   |(:      "|( \_|:  \( \_|:  \  
(_______)   \"_____/   |___/    \___| \_______) \_______)\_______) 
`

const Tooltip = () => (
  <article className="output--block tooltip">
    {powellASCII.split('\n').filter(Boolean).map((line) => (
      <pre>{line}</pre>
    ))}
    <p>
      <FontAwesomeIcon icon={faInfoCircle} />
      {` `}
      <span className="bold">powell -h</span>
      {` `}
      command reveals the list of all available actions.
    </p>
  </article>
)


export default Tooltip
