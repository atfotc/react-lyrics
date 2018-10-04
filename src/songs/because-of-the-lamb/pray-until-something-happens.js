import React, { Fragment } from "react"
import { seconds } from "../../helpers"
import { Line, Repeat, DelayedVerse, Yahweh } from "../../components"

const DelayedVerse1 = props => (
    <DelayedVerse {...props}>
        <Line>Pray until something happens</Line>
        <Line>Don’t ever stop</Line>
        <Line>Pray until you have your answer</Line>
        <Line>Don’t ever give up</Line>
    </DelayedVerse>
)

const DelayedVerse2 = props => (
    <DelayedVerse {...props}>
        <Line>‘Cause the heavens are filled</Line>
        <Line>with the prayers of the saints</Line>
        <Line>And the angels respond to their power</Line>
        <Line>
            And <Yahweh /> hears the cry
        </Line>
        <Line>from a faith-filled heart</Line>
        <Line>He’ll never let you down</Line>
    </DelayedVerse>
)

const DelayedVerse3 = props => (
    <DelayedVerse {...props}>
        <Line>Lift your voice high</Line>
        <Line>To the heavens</Line>
        <Line>He is faithful</Line>
        <Line>He will hear you</Line>
    </DelayedVerse>
)

const PrayUntilSomethingHappens = ({ animated, current }) => {
    return (
        <Fragment>
            <DelayedVerse1
                animated={animated}
                current={current}
                after={seconds("00:06")}
                before={seconds("00:28")}
                repeat
            />
            <DelayedVerse2
                animated={animated}
                current={current}
                after={seconds("00:28")}
                before={seconds("00:41")}
            />
            <DelayedVerse1
                animated={animated}
                current={current}
                after={seconds("00:41")}
                before={seconds("01:02")}
                repeat
            />
            <DelayedVerse3
                animated={animated}
                current={current}
                after={seconds("01:02")}
                before={seconds("01:25")}
                repeat
            />
            <DelayedVerse1
                animated={animated}
                current={current}
                after={seconds("01:25")}
                before={seconds("01:47")}
                repeat
            />
            <DelayedVerse2
                animated={animated}
                current={current}
                after={seconds("01:47")}
                before={seconds("02:00")}
            />
            <DelayedVerse1
                animated={animated}
                current={current}
                after={seconds("02:00")}
                before={seconds("02:22")}
                repeat
            />
            <DelayedVerse3
                animated={animated}
                current={current}
                after={seconds("02:22")}
                before={seconds("02:45")}
                repeat
            />
            <DelayedVerse1
                animated={animated}
                current={current}
                after={seconds("02:45")}
                before={seconds("03:06")}
                repeat
            />
            <DelayedVerse
                animated={animated}
                current={current}
                after={seconds("03:06")}
                before={seconds("03:12")}
            >
                <Line>Pray until something happens...</Line>
            </DelayedVerse>
        </Fragment>
    )
}

export { PrayUntilSomethingHappens }
