// Resistors have color coded bands, where each color maps to a number. The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number. Mnemonics map the colors to the numbers, that, when stored as an array, happen to map to their index in the array: Better Be Right Or Your Great Big Values Go Wrong.

const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]

const colorCode = (color) => {
    let lowerCaseColor = color.toLowerCase()
    return COLORS.indexOf(lowerCaseColor)
}

export {COLORS, colorCode}