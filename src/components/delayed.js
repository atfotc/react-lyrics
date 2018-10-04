import React, { Component } from "react"
import PropTypes from "prop-types"

const Delayed = Decorated =>
    class extends Component {
        static propTypes = {
            playing: PropTypes.bool,
            current: PropTypes.number,
            expected: PropTypes.number,
        }

        static defaultProps = {
            playing: false,
            current: 0,
            expected: 0,
        }

        render() {
            const { playing, current, expected, ...rest } = this.props

            if (playing) {
                if (current >= expected) {
                    return <Decorated {...rest} />
                }
            }

            return null
        }
    }

export { Delayed }
