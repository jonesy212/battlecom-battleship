const hit = () => {
    for (const hit of hitsLeft) {
        if (ships.has(hit)) {
            console.log('you\ve been hit!')
            hit - 1
            console.log('remaining hits left', hitsLeft)
        } else {
            console.log('lucky you, no damage taken')
            ships.set(hit, hitsLeft)
        }
    }
}