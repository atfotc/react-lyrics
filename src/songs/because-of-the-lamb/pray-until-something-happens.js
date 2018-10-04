import React, { Fragment } from "react"
import { Line, Repeat, Verse, Yahweh } from "../../components"

const Verse1 = ({ repeat }) => (
    <Verse repeat={repeat}>
        <Line>Pray until something happens</Line>
        <Line>Don’t ever stop</Line>
        <Line>Pray until you have your answer</Line>
        <Line>Don’t ever give up</Line>
    </Verse>
)

const Verse2 = () => (
    <Verse>
        <Line>‘Cause the heavens are filled</Line>
        <Line>with the prayers of the saints</Line>
        <Line>And the angels respond to their power</Line>
        <Line>
            And <Yahweh /> hears the cry
        </Line>
        <Line>from a faith-filled heart</Line>
        <Line>He’ll never let you down</Line>
    </Verse>
)

const Verse3 = ({ repeat }) => (
    <Verse repeat={repeat}>
        <Line>Lift your voice high</Line>
        <Line>To the heavens</Line>
        <Line>He is faithful</Line>
        <Line>He will hear you</Line>
    </Verse>
)

const PrayUntilSomethingHappens = () => (
    <Fragment>
        <Repeat>
            <Verse1 repeat />
            <Verse2 />
            <Verse1 repeat />
            <Verse3 repeat />
        </Repeat>
        <Verse1 repeat />
        <Verse>
            <Line>Pray until something happens...</Line>
        </Verse>
    </Fragment>
)

export { PrayUntilSomethingHappens }
