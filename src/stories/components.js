import React from "react"
import { storiesOf } from "@storybook/react"

import { Delayed } from "../components"

storiesOf("Components", module)
    .add("Delayed → Default", () => {
        const Thing = () => <div>hello world</div>
        const DelayedThing = Delayed(Thing)

        return <DelayedThing />
    })
    .add("Delayed → Hidden", () => {
        const Thing = () => <div>hello world</div>
        const DelayedThing = Delayed(Thing)

        return <DelayedThing current={1} expected={2} />
    })
