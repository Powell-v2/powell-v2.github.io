import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'

const Link = ({
  to, children, cmd, ...other
}) => (
  cmd ? (
    <button type="button" {...other}>
      {children}
    </button>
  ) : (
    <GatsbyLink
      to={to}
      {...other}
    >
      {children}
    </GatsbyLink>
  )
)

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
  cmd: PropTypes.bool,
}

Link.defaultProps = {
  to: `/`,
  children: `This is nothing but a placholder link text`,
  cmd: false,
}

export default Link
