/* eslint-disable no-unused-vars */
//
const isQuestion = (input) => {
    if (input.endsWith("?")) {
        return true
    }
}
const isYelling = (input) => {
    if (input.search(/[a-z]/i) === -1) {
        return false
    } else {
        return input === input.toUpperCase()
    }
}

export const hey = (message) => {
    let msg = message.trim()

    if (isQuestion(msg) && isYelling(msg)) {
        return "Calm down, I know what I'm doing!"
    }
    else if (isQuestion(msg)) {
        return "Sure."
    }
    else if (isYelling(msg)) {
        return "Whoa, chill out!"
    }
    else if (msg === "") {
        return "Fine. Be that way!"
    }
    else {
        return "Whatever."
    }
};
