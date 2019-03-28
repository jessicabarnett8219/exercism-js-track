
const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]

const colorCode = (color) => {
    let lowerCaseColor = color.toLowerCase()
    return COLORS.indexOf(lowerCaseColor)
}

export {COLORS, colorCode}