import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import defaults from "../defaults"
import { themed, repeatThemed } from "../helpers"
import { Delayed } from "./delayed"

const StyledVerse = styled.div`
    position: relative;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    font-family: ${themed("fontFamily", defaults)};
    font-size: ${themed("fontSize", defaults)};
    line-height: ${themed("lineHeight", defaults)};
    border-left: ${repeatThemed("repeatBorder", defaults)};
    border-bottom: ${repeatThemed("repeatBorder", defaults)};
    padding-left: ${repeatThemed("repeatPaddingX", defaults)};
    padding-bottom: ${repeatThemed("repeatPaddingY", defaults)};
    margin-top: ${themed("marginTop", defaults)};

    &:first-child {
        margin-top: 0;
    }
`

const StyledRepeat = styled.div`
    position: absolute;
    right: ${themed("repeatPaddingX", defaults)};
    bottom: ${themed("repeatPaddingY", defaults)};
    font-family: ${themed("fontFamily", defaults)};
    font-size: ${themed("repeatFontSize", defaults)};
    line-height: ${themed("lineHeight", defaults)};
`

const Verse = ({ children, repeat, repeatTimes, ...rest }) => (
    <StyledVerse repeat={repeat} {...rest}>
        {children}
        {repeat && (
            <StyledRepeat repeat={repeat} {...rest}>
                x{repeatTimes}
            </StyledRepeat>
        )}
    </StyledVerse>
)

Verse.propTypes = {
    repeat: PropTypes.bool,
    repeatTimes: PropTypes.number,
}

Verse.defaultProps = {
    repeat: false,
    repeatTimes: 2,
}

const DelayedVerse = Delayed(Verse)

export { DelayedVerse, Verse }
