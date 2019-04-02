import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { palette } from '../../styles/meta'

const menuButton = css`
  position: absolute;
  top: 4.5rem;
  left: 1.5rem;
  width: 5rem;
  height: 3rem;
  background-color: ${palette.purple};
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  z-index: 555;
  transition: transform .444s ease-out;
  &:before, &:after {
    content: "";
    position: absolute;
    left: 0;
    border-left: 2.5rem solid transparent;
    border-right: 2.5rem solid transparent; }
  &:before {
    top: -1.5rem;
    border-bottom: 1.5rem solid ${palette.purple}; }
  &:after {
    bottom: -1.5rem;
    border-top: 1.5rem solid ${palette.purple}; }
  &:hover {
    transform: rotate(-180deg); }
`
const burgerOnHover = css`
  &:hover > span {
    &::before {
      transform: scaleX(1);
      transform-origin: right; }
    &::after {
      transform: scaleX(.8);
      transform-origin: right; }
    & span {
      transform-origin: right;
      transform: scaleX(.6); }}
`
const burger = css`
  display: block;
  padding: 0 .9rem;
  &::before, &::after {
    content: "";
    display: block;
    height: calc(3rem / 6);
    background-color: ${palette.beige};
    transition: all .444s ease-out; }
  &::before, &::after {
    transform-origin: center;
    transform: scaleX(.55); }
  & span {
    display: block;
    height: calc(3rem / 6);
    margin: calc(3rem / 6) 0;
    background-color: ${palette.beige};
    transform-origin: center;
    transform: scaleX(1);
    transition: all .444s ease-out; }
`
const cross = css`
  &::before, &::after {
    transform-origin: center; }
  &::before {
    transform: scaleX(1) translateY(1rem) rotate(-45deg); }
  &::after {
    transform: scaleX(1) translateY(-1rem) rotate(45deg); }
  & span {
    transform: scaleX(0); }
`

const MenuButton = ({ isOpen, setIsOpen }) => (
  <button
    type="button"
    css={[menuButton, !isOpen && burgerOnHover]}
    onClick={() => setIsOpen((prevState) => !prevState)}
    onKeyDown={(e) => {
      // Enter and Space, respectively
      if (e.keyCode === 13 || e.keyCode === 32) {
        setIsOpen(true)
      }
    }}
  >
    <span css={[burger, isOpen && cross]}>
      <span />
    </span>
  </button>
)

MenuButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
}

export default MenuButton
