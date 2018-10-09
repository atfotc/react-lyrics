import { Children, Component, cloneElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import PropTypes from "prop-types"
import { seconds } from "../helpers"

class Song extends Component {
    static propTypes = {
        isAnimating: PropTypes.bool,
        isPlaying: PropTypes.bool,
        isPrinting: PropTypes.bool,
        theme: PropTypes.object,
    }

    static defaultProps = {
        isAnimating: false,
        isPlaying: false,
        isPrinting: false,
        theme: {},
    }

    state = {
        isPlaying: false,
        ticks: 0,
    }

    static getDerivedStateFromProps({ isPlaying }, previousState) {
        return {
            isPlaying,
            ticks: isPlaying ? 0 : undefined,
        }
    }

    componentDidUpdate(previousProps, { isPlaying }) {
        if (isPlaying) {
            if (!this.startedAt) {
                this.startedAt = new Date()
            }
        } else {
            this.startedAt = undefined
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const { isPlaying } = this.state

            if (isPlaying) {
                this.setState(state => ({
                    ticks: state.ticks + 1,
                }))
            }
        }, 250)
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    markupFrom = target => {
        let markup = renderToStaticMarkup(target)
        let element = document.createElement("div")

        element.innerHTML = markup
        const text = element.innerText

        element = null
        markup = null

        return text
    }

    firstChildFrom = target => {
        if (Children.count(target.props.children) > 1) {
            return target.props.children[0]
        }

        return target.props.children
    }

    verseFrom = target => {
        const firstChild = this.firstChildFrom(target)

        if (!firstChild) {
            console.error("verse has no children", target)
        }

        const firstLine = this.markupFrom(firstChild)

        if (!firstLine) {
            console.error("verse has no lines", target)
        }

        return {
            firstLine,
            verse: target,
        }
    }

    verseFromRepeatOf = (target, verses) => {
        const firstLine = this.markupFrom(target.props.children).replace(
            /\.+$/,
            "",
        )

        if (!firstLine) {
            console.error("repeat has no lines", target)
        }

        const matching = verses.filter(verse => verse.firstLine === firstLine)

        if (matching.length !== 1) {
            console.error("no single verse found matching repeat", target)
        }

        return matching[0].verse
    }

    renderStaticChildren = () => {
        const { children, isPrinting, theme } = this.props

        const verses = []
        const processed = []

        let i = 0

        Children.forEach(children, child => {
            const props = {
                key: `child_${i}`,
                theme,
            }

            if (child.type.name === "Verse") {
                const verse = this.verseFrom(child)
                processed.push(cloneElement(verse.verse, props))
                verses.push(verse)
            }

            if (child.type.name === "Repeat") {
                if (isPrinting) {
                    processed.push(
                        cloneElement(child, {
                            ...props,
                            isPrinting: true,
                        }),
                    )
                } else {
                    const verse = this.verseFromRepeatOf(child, verses)
                    processed.push(cloneElement(verse, props))
                }
            }

            i++
        })

        return processed
    }

    renderAnimatedChildren = () => {
        const { cues } = this.props

        const processed = this.renderStaticChildren()
        const limits = []

        for (let i = 0; i < cues.length; i++) {
            if (i < cues.length - 1) {
                limits.push([seconds(cues[i]), seconds(cues[i + 1])])
            } else {
                limits.push([seconds(cues[i]), 9999]) // make this dynamic for the track...
            }
        }

        const now = new Date()
        const then = this.startedAt || new Date()
        const diff = (now.getTime() - then.getTime()) / 1000

        const shown = []

        for (let i = 0; i < processed.length; i++) {
            if (diff >= limits[i][0] && diff < limits[i][1]) {
                shown.push(cloneElement(processed[i]))
            }
        }

        return shown
    }

    render() {
        const { isAnimating } = this.props

        if (isAnimating) {
            return this.renderAnimatedChildren()
        }

        return this.renderStaticChildren()
    }
}

export { Song }
