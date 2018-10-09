import React, { Children, cloneElement } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import defaults from "../defaults"
import { themed } from "../helpers"

const StyledLine = styled.div`
    display: flex;
    flex-shrink: 1;
    align-items: ${themed("lineAlignItems", defaults)};
    white-space: nowrap;

    ::after {
        display: flex;
        content: '${props => props.repeat && props.repeatText}';
        color: ${themed("repeatFontColor", defaults)};
        font-family: ${themed("fontFamily", defaults)};
        font-size: ${themed("repeatFontSize", defaults)};
        font-weight: ${themed("repeatFontWeight", defaults)};
        line-height: ${themed("lineHeight", defaults)};
        margin-left: ${themed("repeatMargin", defaults)};
        vertical-align: ${themed("repeatVerticalAlign", defaults)};
    }
`

const Line = ({ theme, children, ...rest }) => (
    <StyledLine theme={theme} {...rest}>
        {Children.map(children, child => {
            if (typeof child === "string") {
                return child
            }

            return cloneElement(child, {
                theme,
            })
        })}
    </StyledLine>
)

Line.propTypes = {
    repeat: PropTypes.bool,
    repeatText: PropTypes.string,
    theme: PropTypes.object,
}

Line.defaultProps = {
    repeat: false,
    repeatText: defaults.repeatText,
    theme: {},
}

export { Line, StyledLine }
