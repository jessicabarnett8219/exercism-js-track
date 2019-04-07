/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const hey = (message) => {
    const isUpperCase = (str) => {
        return str === str.toUpperCase();
    }
    let msg = message.trim()
    let lastIndex = msg.length - 1

    if (msg.search(/[a-z]/i) === -1 && msg[lastIndex] === "?") {
        return "Sure."
    }
    else if (msg.search(/[a-z]/i) === -1 && msg[lastIndex] === "!") {
        return "Whoa, chill out!"
    }
    else if (msg === "") {
        return "Fine. Be that way!"
    }
    else if (msg.search(/[a-z]/i) === -1) {
        return "Whatever."
    }
    else if (isUpperCase(msg) === true && msg[lastIndex] !== "?") {
        return "Whoa, chill out!"
    }
    else if (msg[lastIndex] === "?" && isUpperCase(msg) === true) {
        return "Calm down, I know what I'm doing!"
    }
    else if (isUpperCase(msg) === true) {
        return "Whoa, chill out!"
    }
    else if (msg[lastIndex] === "?") {
        return "Sure."
    }
    else {
        return "Whatever."
    }
};
