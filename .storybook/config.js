import { configure } from "@storybook/react"

const load = () => {
    require("../src/stories/songs")
}

configure(load, module)
