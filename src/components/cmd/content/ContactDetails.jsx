import React from 'react'
import { css } from '@emotion/core'

import ContactLinks from '../../ContactLinks'

import { palette } from '../../../styles/meta'

const linkStyle = css`
  color: ${palette.black};
`

const ContactDetails = () => (
  <article className="output--block">
    <p>Get in touch:</p>
    <ContactLinks
      displayName
      pullIcon="left"
      linkStyle={[linkStyle]}
    />
  </article>
)

export default ContactDetails
