void function goto(gotoLabel: string): void {
    const state = { [gotoLabel]: true }
    try {
        if (state[gotoLabel]) {
            console.log(gotoLabel)
        } else {
            setInterval(setTimeout)
        }
    } finally {
        delete state[gotoLabel]
    }
  goto
}
