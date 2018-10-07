const seconds = timestamp => {
    const parts = timestamp.split(":")

    const minutes = Number(parts[0]) * 60
    const seconds = Number(parts[1])

    return minutes + seconds
}

const value = (key, theme, defaults) => theme[key] || defaults[key]
const themed = (key, defaults) => ({ theme }) => value(key, theme, defaults)

export { seconds, value, themed }
