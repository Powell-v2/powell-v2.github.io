import { css, keyframes } from '@emotion/core'

import { palette } from './meta'

export const linkHighlighted = css`
  box-shadow: inset 0px -2px ${palette.gold};
  transition: background 0.33s cubic-bezier(0.35, 0.65, 0.65, 1);
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
