/* eslint-disable no-useless-escape */
import React from 'react'
import { css } from '@emotion/core'
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

const asciiWrapper = css`
  @media (max-width: 650px) {
    font-size: 0.75rem;
  }
  @media (max-width: 400px) {
    font-size: 0.5rem;
  }
`

const Tooltip = () => (
  <article className="output--block tooltip">
    <div css={asciiWrapper}>
      {powellASCII.split('\n').filter(Boolean).map((line) => (
        <pre>{line}</pre>
      ))}
    </div>
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
