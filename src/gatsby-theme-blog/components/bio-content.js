import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    <span role="img" aria-label="waving">👋</span>
    {' '}
    Hi! I'm Dom, 
    <br />
    Product Design Lead at
    {' '}
    <Styled.a href="http://eigentech.com/">Eigen Technologies</Styled.a>.
  </Fragment>
)
