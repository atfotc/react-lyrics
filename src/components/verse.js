import React, { Children, cloneElement } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import defaults from "../defaults"
import { themed } from "../helpers"

const StyledVerse = styled.div`
    position: relative;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    color: ${themed("fontColor", defaults)};
    font-family: ${themed("fontFamily", defaults)};
    font-size: ${themed("fontSize", defaults)};
    font-weight: ${themed("fontWeight", defaults)};
    line-height: ${themed("lineHeight", defaults)};
    margin-top: ${themed("verseMarginTop", defaults)};

    :first-child {
        margin-top: 0;
    }
`

const Verse = ({ children, repeat, repeatText, ...rest }) => {
    const count = Children.count(children)

    let i = 0

    return (
        <StyledVerse {...rest}>
            {Children.map(children, child => {
                if (repeat && i === count - 1) {
                    return cloneElement(child, {
                        repeat,
                        repeatText,
                    })
                }

                i++

                return child
            })}
        </StyledVerse>
    )
}

Verse.propTypes = {
    repeat: PropTypes.bool,
    repeatText: PropTypes.string,
}

Verse.defaultProps = {
    repeat: false,
    repeatText: defaults.repeatText,
}

export { Verse, StyledVerse }
