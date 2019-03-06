import React, { useState, useEffect, useRef } from 'react'

import Controls from './Controls'

import AboutMe from './content/AboutMe'
import CmdEmpty from './content/Empty'
import CmdNotRecognized from './content/CmdNotRecognized'
import ContactDetails from './content/ContactDetails'
import Help from './content/Help'
import PostList from './content/PostList'
import Skills from './content/Skills'
import Tooltip from './content/Tooltip'

import useWindowSize from '../custom_hooks/useWindowSize'

const rand = () => Math.random() * 10000

export default function Terminal() {
  const [streamNodes, setStreamNodes] = useState([<Tooltip key={rand()} />])
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
      displayNextNode(<CmdEmpty key={rand()} />)
    } else if (flag === `--help` || flag === `-h`) {
      displayNextNode(<Help key={rand()} />)
    } else if (flag === `--version` || flag === `-v`) {
      displayNextNode(
        <article className="output--block">
          <p>Version 2.3.0</p>
        </article>
      )
    } else if (flag === `--blog` || flag === `-b`) {
      displayNextNode(
        <PostList key={rand()} displayNextNode={displayNextNode} />,
      )
    } else if (flag === `--contact` || flag === `-c`) {
      displayNextNode(<ContactDetails key={rand()} />)
    } else if (flag === `--about` || flag === `-a`) {
      displayNextNode(<AboutMe key={rand()} />)
    } else if (flag === `--skills` || flag === `-s`) {
      displayNextNode(<Skills key={rand()} />)
    } else {
      displayNextNode(<CmdNotRecognized key={rand()} />)
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
      style={{
        height: `${windowHeight / 1.5}px`,
        width: `${windowWidth / 1.2}px`,
      }}
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
