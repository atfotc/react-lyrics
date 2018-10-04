import { configure } from "@storybook/react"

const load = () => {
    require("../src/stories/components")
    require("../src/stories/songs")
}

configure(load, module)
