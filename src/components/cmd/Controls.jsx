import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import useWindowSize from '../custom_hooks/useWindowSize'

const isMobile = (
  window.navigator.userAgent.match(/Mobile/)
  && window.navigator.userAgent.match(/Mobile/)[0] === `Mobile`)

function Controls({ handleSubmit, clearOutputStream }) {
  const [command, setCommand] = useState(``)
  const [placeholder, setPlaceholder] = useState(`\`Type a command here\``)
  const { windowWidth } = useWindowSize()

  useEffect(() => {
    if (windowWidth >= 825) {
      setPlaceholder(`Type a command here and hit 'Run' to execute it`)
    } else if (windowWidth >= 645) {
      setPlaceholder(`Type a command here and hit 'Run'`)
    } else {
      setPlaceholder(`Type a command here`)
    }
  }, [windowWidth])

  function sendRipple(e) {
    const btn = e.target
    const rect = btn.getBoundingClientRect()
    const btnWidth = rect.width
    const ripple = document.createElement(`span`)

    let mousePosX = 0
    let mousePosY = 0

    if (isMobile) {
      mousePosX = e.changedTouches[0].pageX - rect.left
      mousePosY = e.changedTouches[0].pageY - rect.top
    } else {
      mousePosX = e.clientX - rect.left
      mousePosY = e.clientY - rect.top
    }

    const initialCSS = `
      position: absolute;
      top:${mousePosY - btnWidth}px;
      left:${mousePosX - btnWidth}px;
      width: ${btnWidth * 2}px;
      height: ${btnWidth * 2}px;
      border-radius: 50%;
      background: rgba(240, 240, 240, 0.6);
      transition: all linear .45s;
      transition-timing-function: ease-in;
      pointer-events: none;
      transform:scale(0);
    `

    ripple.style.cssText = initialCSS
    btn.appendChild(ripple)

    // Add props necessary to kick off animation.
    setTimeout(() => {
      ripple.style.cssText += `transform:scale(1); opacity: 0;`
    }, 1)
    setTimeout(() => ripple.remove(), 555)
  }

  return (
    <section className="controls">
      <form onSubmit={(e) => handleSubmit(e, command)}>
        <label htmlFor="cmd_line">
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </label>
        <input
          type="text"
          id="cmd_line"
          name="cmd_line"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder={placeholder}
        />
        <button
          id="run"
          type="submit"
          data-animation="ripple"
          onClick={sendRipple}
        >
          Run
        </button>
        <button
          id="clear"
          type="button"
          data-animation="ripple"
          onTouchStart={clearOutputStream}
          onClick={(e) => {
            clearOutputStream()
            sendRipple(e)
          }}
        >
          Clear
        </button>
      </form>
    </section>
  )
}

Controls.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  clearOutputStream: PropTypes.func.isRequired,
}

export default Controls
