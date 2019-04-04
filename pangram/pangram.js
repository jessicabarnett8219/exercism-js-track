const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

const isPangram = (sentence) => {
    sentence = sentence.toLowerCase()
    return alphabet.every(letter => sentence.includes(letter))
}

export {isPangram}