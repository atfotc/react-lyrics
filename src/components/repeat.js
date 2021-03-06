import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { StyledLine, StyledVerse } from "../components"
import { themed } from "../helpers"
import defaults from "../defaults"

const StyledRepeatPrefix = styled.div`
    display: flex;
    color: ${themed("repeatFontColor", defaults)};
    font-family: ${themed("fontFamily", defaults)};
    font-size: ${themed("repeatFontSize", defaults)};
    font-weight: ${themed("repeatFontWeight", defaults)};
    line-height: ${themed("lineHeight", defaults)};
    margin-right: ${themed("repeatMargin", defaults)};
    vertical-align: ${themed("repeatVerticalAlign", defaults)};
`

const Repeat = ({ children, isPrinting, theme }) => {
    if (isPrinting) {
        return (
            <StyledVerse theme={theme}>
                <StyledLine theme={theme}>
                    {defaults.repeatPrefix && (
                        <StyledRepeatPrefix theme={theme}>
                            {defaults.repeatPrefix}
                        </StyledRepeatPrefix>
                    )}
                    {children}
                </StyledLine>
            </StyledVerse>
        )
    }

    return null
}

Repeat.propTypes = {
    isPrinting: PropTypes.bool,
    theme: PropTypes.object,
}

Repeat.defaultProps = {
    isPrinting: false,
    theme: {},
}

export { Repeat }
