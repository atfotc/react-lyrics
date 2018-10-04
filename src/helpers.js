const seconds = timestamp => {
    const parts = timestamp.split(":")

    const minutes = Number(parts[0]) * 60
    const seconds = Number(parts[1])

    return minutes + seconds
}

export { seconds }
