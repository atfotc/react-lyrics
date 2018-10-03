import React from "react";
import styled from "styled-components";
import defaults from "../defaults";

const StyledVerse = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-family: ${props => props.theme.fontFamily || defaults.fontFamily};
  font-size: ${props => props.theme.fontSize || defaults.fontSize};
  line-height: ${props => props.theme.lineHeight || defaults.lineHeight};
  border-left: ${props => props.repeat && (props.theme.repeatBorder || defaults.repeatBorder)};
  border-bottom: ${props => props.repeat && (props.theme.repeatBorder || defaults.repeatBorder)};
  padding-left: ${props => props.repeat && (props.theme.repeatBorder || defaults.repeatPadding)};
  padding-bottom: ${props => props.repeat && (props.theme.repeatBorder || defaults.repeatPadding)};

  // repeat text

  ::after {
    position: absolute;
    content: "${props => props.repeat && (props.theme.repeatText || defaults.repeatText)}";
    bottom: 5px;
    right: 5px;
    font-size: ${props => props.theme.repeatFontSize || defaults.repeatFontSize}
  }

  // top margin

  margin-top: 1.5em;

  :first-child {
    margin-top: 0;
  }
`;

const Verse = ({ children, ...rest }) => <StyledVerse {...rest}>{children}</StyledVerse>;

export { Verse };
