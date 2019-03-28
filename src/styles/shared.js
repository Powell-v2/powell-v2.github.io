import { css } from '@emotion/core'

export const linkHighlighted = css`
  box-shadow: inset 0px -2px #ffc555;
  transition: background 0.5s cubic-bezier(0.35, 0.65, 0.65, 1);
  &:hover {
    text-decoration: inherit;
    background: #ffc555; }}
`
