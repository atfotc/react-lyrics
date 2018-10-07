import React from "react"
import styled from "styled-components"
import defaults from "../defaults"
import { themed } from "../helpers"

const StyledYahweh = styled.span`
    color: ${themed("hebrewFontColor", defaults)};
    font-family: ${themed("hebrewFontFamily", defaults)};
    font-weight: ${themed("hebrewFontWeight", defaults)};
    margin: 0 ${themed("hebrewMargin", defaults)};
`

const Yahweh = () => <StyledYahweh>יהוה</StyledYahweh>

export { Yahweh }
