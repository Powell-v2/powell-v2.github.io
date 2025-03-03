import React, { useState, useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

import Controls from './Controls'

import AboutMe from './content/AboutMe'
import CmdEmpty from './content/Empty'
import CmdNotRecognized from './content/CmdNotRecognized'
import ContactDetails from './content/ContactDetails'
import Help from './content/Help'
import PostList from '../PostList'
// import Skills from './content/Skills'
import Tooltip from './content/Tooltip'

import useWindowSize from '../custom_hooks/useWindowSize'
import { randInt } from '../../utils'

import { linkHighlighted } from '../../styles/shared'

export default function Terminal() {
  const [streamNodes, setStreamNodes] = useState([<Tooltip key={randInt()} />])
  const { windowWidth, windowHeight } = useWindowSize()
  const terminalEl = useRef()
  const outputStreamEl = useRef()

  function displayNextNode(component) {
    setStreamNodes((prevStreamNodes) => [...prevStreamNodes, component])
  }

  function clearOutputStream() {
    outputStreamEl.current.innerHTML = ``
  }

  function handleSubmit(e, command) {
    e.preventDefault()
    const flag = command.toLowerCase().split(` `).filter(Boolean)[1]

    if (command === ``) {
      displayNextNode(<CmdEmpty key={randInt()} />)
    } else if (flag === `--help` || flag === `-h`) {
      displayNextNode(<Help key={randInt()} />)
    } else if (flag === `--version` || flag === `-v`) {
      displayNextNode(
        <article className="output--block">
          <p>v2.6.0 (03/18/2019)</p>
        </article>
      )
    } else if (flag === `--quit` || flag === `-q`) {
      navigate('/')
    } else if (flag === `--blog` || flag === `-b`) {
      displayNextNode(
        <article
          key={randInt()}
          className="output--block"
        >
          <p>Latest posts:</p>
          <PostList
            cmd
            linkStyle={[linkHighlighted, css`color: black;`]}
            onItemSelect={displayNextNode}
            customBulletPoint={<FontAwesomeIcon icon={faSun} />}
          />
        </article>
      )
    } else if (flag === `--links` || flag === `-l`) {
      displayNextNode(<ContactDetails key={randInt()} />)
    } else if (flag === `--about` || flag === `-a`) {
      displayNextNode(<AboutMe key={randInt()} />)
    }
    // } else if (flag === `--skills` || flag === `-s`) {
    //   displayNextNode(<Skills key={randInt()} />)
    // }
    else {
      displayNextNode(<CmdNotRecognized key={randInt()} />)
    }
  }

  // Always keep terminal centered.
  useEffect(() => {
    const positionTop = (windowHeight - terminalEl.current.offsetHeight) / 2
    const positionLeft = (windowWidth - terminalEl.current.offsetWidth) / 2

    terminalEl.current.style.top = `${positionTop}px`
    terminalEl.current.style.left = `${positionLeft}px`
  }, [windowWidth, windowHeight])

  // Scroll to the bottom of the terminal if content overflows.
  useEffect(() => {
    const { scrollHeight, offsetHeight } = outputStreamEl.current

    if (scrollHeight > offsetHeight) {
      outputStreamEl.current.scrollTop = scrollHeight
    }
  })

  return (
    <section
      className="terminal"
      ref={terminalEl}
    >
      <Controls
        handleSubmit={handleSubmit}
        clearOutputStream={clearOutputStream}
      />
      <section
        className="output"
        ref={outputStreamEl}
      >
        {streamNodes}
      </section>
    </section>
  )
}
