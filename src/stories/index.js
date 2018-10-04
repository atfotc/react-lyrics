import React from "react"

import { storiesOf } from "@storybook/react"
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

import { PrayUntilSomethingHappens } from "../songs/because-of-the-lamb"
import { Delayed } from "../components"

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf("Because Of The Lamb", module).add("Pray Until Something Happens", () => <PrayUntilSomethingHappens />)

storiesOf("Components", module)
    .add("Delayed → Default", () => {
        const Thing = () => <div>hello world</div>
        const DelayedThing = Delayed(Thing)

        return <DelayedThing />
    })
    .add("Delayed → Playing", () => {
        const Thing = () => <div>hello world</div>
        const DelayedThing = Delayed(Thing)

        return <DelayedThing playing />
    })
