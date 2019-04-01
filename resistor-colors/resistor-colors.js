// Each resistor has a resistance value.
// Each band acts as a digit of a number. For example, if they printed a brown band (value 1) followed by a green band (value 5), it would translate to the number 15.
// In this exercise, you are going to create a helpful program so that you don't have to remember the values of the bands. The program will take two colors as input, and output the correct number.

const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]

const colorCode = (color) => {
    let lowerCaseColor = color.toLowerCase()
    return COLORS.indexOf(lowerCaseColor)
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const value = (colorArray) => {
    let codeArray = []
    colorArray.forEach( color => {
        let num = colorCode(color).toString()
        codeArray.push(num)
    })
    return parseInt(codeArray.reduce(reducer))
}

export {value}