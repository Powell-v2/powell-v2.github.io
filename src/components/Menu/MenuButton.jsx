import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import * as componentStyles from './MenuButton.module.css'
import { palette } from '../../styles/meta'

const button = css`
  width: 5rem;
  height: 5rem;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`
const burgerOnHover = css`
  &:hover > span {
    &::before {
      transform: scaleX(.95);
    }
    &::after {
      transform: scaleX(.95);
    }
    & span {
      transform: scaleX(.6);
    }
  }
`
const burgerCss = css`
  display: block;
  padding: 0 .9rem;
  &::before, &::after {
    content: "";
    display: block;
    height: calc(3rem / 6);
    background-color: ${palette.beige};
    transition: all 175ms ease-in-out;
  }
  &::before, &::after {
    transform-origin: center;
    transform: scaleX(.55);
  }
  & span {
    display: block;
    height: calc(3rem / 6);
    margin: calc(3rem / 6) 0;
    background-color: ${palette.beige};
    transform-origin: center;
    transform: scaleX(1);
    transition: all 175ms ease-in-out;
  }
`
const crossCss = css`
  &::before, &::after {
    transform-origin: center;
  }
  &::before {
    transform:
      scaleX(1)
      translateY(1rem)
      rotate(-45deg);
  }
  &::after {
    transform:
      scaleX(1)
      translateY(-1rem)
      rotate(45deg);
  }
  & span {
    transform: scaleX(0);
  }
`

const MenuButton = ({ isOpen, setIsOpen }) => (
  <div className={componentStyles.buttonWrapper}>
    <button
      type="button"
      aria-label="Menu"
      css={[button, !isOpen && burgerOnHover]}
      onClick={() => setIsOpen((prevState) => !prevState)}
      onKeyDown={(e) => {
        // Enter and Space, respectively
        if (e.keyCode === 13 || e.keyCode === 32) {
          setIsOpen(true)
        }
      }}
    >
      <span css={[burgerCss, isOpen && crossCss]}>
        <span />
      </span>
    </button>
  </div>
)

MenuButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
}

export default MenuButton
