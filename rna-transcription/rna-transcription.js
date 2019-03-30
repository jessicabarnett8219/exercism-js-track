const toRna = (string) => {
    let stringArray = []
    string = string.split("")
    string.forEach( character => {
        if (character === "G") {
            character = "C"
            stringArray.push(character)
        } else if (character === "C") {
            character = "G"
            stringArray.push(character)
        } else if (character === "T" ) {
            character = "A"
            stringArray.push(character)
        } else if (character === "A") {
            character = "U"
            stringArray.push(character)
        }
    })
    return stringArray.join("")
}

export {toRna}