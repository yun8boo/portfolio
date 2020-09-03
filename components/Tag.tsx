import React from 'react'
import styled from 'styled-components';

const Tag = ({title}) => (
  <Span>{title}</Span>
)

export default Tag

const Span = styled.span`
  margin: 0 5px;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: #3578e5;
  color: #fafafa;
  font-size: 12px;
`