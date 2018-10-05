import React from "react"
import { storiesOf } from "@storybook/react"
import { State, Store } from "@sambego/storybook-state"

import { Canvas } from "../components"
import { PrayUntilSomethingHappens } from "../songs/because-of-the-lamb"

const store = new Store({
    current: 0,
    capturing: false,
    start: new Date(),
})

setInterval(() => {
    const now = new Date()
    const difference = now.getTime() - store.get("start").getTime()

    store.set({
        current: Math.round(difference / 1000),
    })
}, 250)

storiesOf("Because Of The Lamb", module)
    .add("Pray Until Something Happens → Static", () => (
        <PrayUntilSomethingHappens />
    ))
    .add("Pray Until Something Happens → Animated", () => {
        return (
            <State store={store}>
                {state => (
                    <div>
                        {state.current} seconds
                        <PrayUntilSomethingHappens
                            current={state.current}
                            animated
                        />
                    </div>
                )}
            </State>
        )
    })
    .add("Pray Until Something Happens → Captured", () => {
        return (
            <State store={store}>
                {state => (
                    <div>
                        <Canvas width={1280} height={720}>
                            <PrayUntilSomethingHappens
                                animated
                                current={state.current}
                                theme={{
                                    fontFamily: "sans-serif",
                                    fontSize: "45px",
                                    repeatPaddingX: "20px",
                                    repeatPaddingY: "10px",
                                    repeatFontSize: "30px",
                                }}
                            />
                        </Canvas>
                        <br />
                        <button
                            onClick={() =>
                                store.set({
                                    current: 0,
                                    start: new Date(),
                                })
                            }
                        >
                            reset
                        </button>
                    </div>
                )}
            </State>
        )
    })
