import React from 'react'
import { css } from '@emotion/core'

import ContactLinks from '../../ContactLinks'

import { palette } from '../../../styles/meta'
import { linkHighlighted } from '../../../styles/shared'

const ContactDetails = () => (
  <article className="output--block">
    <ContactLinks
      displayName
      linkStyle={[
        linkHighlighted,
        css`color: ${palette.black};`
      ]}
    />
  </article>
)

export default ContactDetails
