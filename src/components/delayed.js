import React, { Component } from "react"
import PropTypes from "prop-types"

const Delayed = Decorated =>
    class extends Component {
        static propTypes = {
            animated: PropTypes.bool,
            current: PropTypes.number,
            added: PropTypes.number,
            after: PropTypes.number,
            before: PropTypes.number,
        }

        static defaultProps = {
            animated: false,
            current: 0,
            added: 0,
            after: 0,
            before: 0,
        }

        render() {
            const { animated, current, added, after, before, ...rest } = this.props

            if (!animated || (current >= after + added && current < before + added)) {
                return <Decorated {...rest} />
            }

            return null
        }
    }

export { Delayed }
