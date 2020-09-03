import React from 'react'
import styled from 'styled-components'

const h2 = ({title}) => (
  <H2>{title}</H2>
)

export default h2

const H2 = styled.h2`
  border-left: 5px solid #3578e5;
  padding-left: 10px;
`