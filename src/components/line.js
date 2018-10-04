import React from "react"
import styled from "styled-components"

const StyledLine = styled.div`
    white-space: nowrap;
`

const Line = ({ children }) => <StyledLine>{children}</StyledLine>

export { Line }
