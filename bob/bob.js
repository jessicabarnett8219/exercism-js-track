/* eslint-disable no-unused-vars */
//
const isQuestion = (input) => {
    if (input.endsWith("?")) {
        return true
    }
}
const isYelling = (input) => {
    return input === input.toUpperCase()
}
const noLetters = (input) => {
    if (input.search(/[a-z]/i) === -1) {
        return true
    }
}
export const hey = (message) => {
    let msg = message.trim()

    if(noLetters(msg) && isQuestion(msg)) {
        return "Sure."
    }
    else if (msg === "") {
        return "Fine. Be that way!"
    }
    else if (noLetters(msg)) {
        return "Whatever."
    }
    else if (isQuestion(msg) && isYelling(msg)) {
        return "Calm down, I know what I'm doing!"
    }
    else if (isYelling(msg) && isQuestion(msg) !== true ) {
        return "Whoa, chill out!"
    }
    else if (isQuestion(msg)) {
        return "Sure."
    }
    else {
        return "Whatever."
    }
};
