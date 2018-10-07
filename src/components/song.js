import { Children, Component, cloneElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import PropTypes from "prop-types"

class Song extends Component {
    static propTypes = {
        animating: PropTypes.bool,
        playing: PropTypes.bool,
        printing: PropTypes.bool,
    }

    static defaultProps = {
        animating: false,
        playing: false,
        printing: false,
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
        const { children, printing } = this.props

        const verses = []
        const processed = []

        let i = 0

        Children.forEach(children, child => {
            if (child.type.name === "Verse") {
                const verse = this.verseFrom(child)
                processed.push(cloneElement(verse.verse, { key: `child_${i}` }))
                verses.push(verse)
            }

            if (child.type.name === "Repeat") {
                if (printing) {
                    processed.push(
                        cloneElement(child, {
                            printing: true,
                            key: `child_${i}`,
                        }),
                    )
                } else {
                    const verse = this.verseFromRepeatOf(child, verses)
                    processed.push(cloneElement(verse, { key: `child_${i}` }))
                }
            }

            i++
        })

        return processed
    }

    render() {
        const { animating } = this.props

        if (!animating) {
            return this.renderStaticChildren()
        }

        return this.renderChildren()
    }
}

export { Song }
