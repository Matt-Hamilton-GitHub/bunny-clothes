import React from 'react'
import styled from 'styled-components'

function Error() {
  return (
    <Wrapper>
        <span><h1>404</h1></span>
    </Wrapper>
  )
}

export default Error

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`