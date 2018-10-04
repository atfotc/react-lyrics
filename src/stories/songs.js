import React from "react"
import { storiesOf } from "@storybook/react"
import { State, Store } from "@sambego/storybook-state"

import { PrayUntilSomethingHappens } from "../songs/because-of-the-lamb"

const store = new Store({
    current: 0,
})

const then = new Date()

setInterval(() => {
    const now = new Date()
    const difference = now.getTime() - then.getTime()

    store.set({
        current: Math.round(difference / 1000),
    })
}, 200)

storiesOf("Because Of The Lamb", module)
    .add("Pray Until Something Happens → Static", () => <PrayUntilSomethingHappens />)
    .add("Pray Until Something Happens → Animated", () => {
        return (
            <State store={store}>
                <PrayUntilSomethingHappens current={store.get("current")} animated />
            </State>
        )
    })
