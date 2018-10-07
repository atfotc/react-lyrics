import React from "react"
import { Line, Repeat, Song, Verse, Yahweh } from "../../components"

const PrayUntilSomethingHappens = props => (
    <Song
        cues={[
            "00:06",
            "00:28",
            "00:41",
            "01:02",
            "01:25",
            "01:47",
            "02:00",
            "02:22",
            "02:45",
            "03:06",
            "03:12",
        ]}
        track="because-of-the-lamb/pray-until-something-happens.mp3"
        {...props}
    >
        <Verse repeat>
            <Line>Pray until something happens</Line>
            <Line>Don’t ever stop</Line>
            <Line>Pray until you have your answer</Line>
            <Line>Don’t ever give up</Line>
        </Verse>
        <Verse>
            <Line>‘Cause the heavens are filled</Line>
            <Line>with the prayers of the saints</Line>
            <Line>and the angels respond to their power</Line>
            <Line>
                and <Yahweh /> hears the cry
            </Line>
            <Line>from a faith-filled heart</Line>
            <Line>He’ll never let you down</Line>
        </Verse>
        <Repeat>Pray until something happens...</Repeat>
        <Verse repeat>
            <Line>Lift your voice high</Line>
            <Line>To the heavens</Line>
            <Line>He is faithful</Line>
            <Line>He will hear you</Line>
        </Verse>
        <Repeat>Pray until something happens...</Repeat>
        <Repeat>‘Cause the heavens are filled...</Repeat>
        <Repeat>Pray until something happens...</Repeat>
        <Repeat>Lift your voice high...</Repeat>
        <Repeat>Pray until something happens...</Repeat>
        <Verse>
            <Line>Pray until something happens.</Line>
        </Verse>
    </Song>
)

export { PrayUntilSomethingHappens }
