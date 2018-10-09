import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"

import { PrayUntilSomethingHappens } from "../songs/because-of-the-lamb"

storiesOf("Because Of The Lamb", module)
    .addDecorator(withKnobs)
    .add("Pray Until Something Happens", () => (
        <PrayUntilSomethingHappens
            isPrinting={boolean("isPrinting", false)}
            isAnimating={boolean("isAnimating", false)}
            isPlaying={boolean("isPlaying", false)}
        />
    ))
