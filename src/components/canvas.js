import React, { Children, Component } from "react"
import PropTypes from "prop-types"
import { renderToStaticMarkup } from "react-dom/server"

import styled, {
    __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS as secrets,
} from "styled-components"

import defaults from "../defaults"
import { themed } from "../helpers"

const { StyleSheet } = secrets

const StyledCanvasWrapper = styled.div`
    position: relative;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: ${themed("canvasPadding", defaults)};
    box-sizing: border-box;
`

class Canvas extends Component {
    canvasContext = undefined

    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    }

    componentDidMount() {
        this.request = requestAnimationFrame(this.animate)
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.request)
    }

    animate = () => {
        if (!this.canvasContext) {
            return
        }

        const { children, width, height } = this.props

        const html = renderToStaticMarkup(
            <StyledCanvasWrapper xmlNs="http://www.w3.org/1999/xhtml">
                {Children.only(children)}
            </StyledCanvasWrapper>,
        )

        const css = StyleSheet.instance.toHTML()

        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
                <foreignObject width="${width}" height="${height}">
                    ${css}
                    <div xmlns="http://www.w3.org/1999/xhtml" style="position: absolute; top: 0; left: 0; width: ${width}px; height: ${height}px;">
                        ${html}
                    </div>
                </foreignObject>
            </svg>
        `

        const encoded = encodeURIComponent(svg)

        const image = new Image()

        image.onload = () => {
            this.canvasContext.fillStyle = "#ffffff"
            this.canvasContext.fillRect(
                0,
                0,
                this.canvas.width,
                this.canvas.height,
            )
            this.canvasContext.imageSmoothingEnabled = false
            this.canvasContext.drawImage(image, 0, 0)
        }

        image.width = width
        image.height = height
        image.src = "data:image/svg+xml," + encoded

        this.request = requestAnimationFrame(this.animate)
    }

    onCanvas = canvas => {
        if (!canvas) {
            return
        }

        this.canvas = canvas
        this.canvasContext = canvas.getContext("2d")
    }

    render() {
        const { width, height } = this.props

        return <canvas ref={this.onCanvas} width={width} height={height} />
    }
}

export { Canvas }
