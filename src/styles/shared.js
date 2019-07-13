import { css, keyframes } from '@emotion/core'

import { palette } from './meta'

export const linkHighlighted = css`
  box-shadow: inset 0px -3px ${palette.gold};
  transition: background 0.25s cubic-bezier(0.35, 0.65, 0.65, 1);
  padding: 4px 5px;
  &:hover {
    text-decoration: inherit;
    background-color: ${palette.gold};
  }
`

export const animations = {
  fadeIn: keyframes`
    from {
      opacity: 0; }
    to {
      opacity: 1; }
  `,
}
