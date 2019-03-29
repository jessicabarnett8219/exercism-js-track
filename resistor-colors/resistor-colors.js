const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]

const colorCode = (color) => {
    let lowerCaseColor = color.toLowerCase()
    return COLORS.indexOf(lowerCaseColor)
}

const value = (colorArray) => {
    let codeSum = ""
    colorArray.forEach( color => {
        let num = colorCode(color)
        codeSum += num
    })
    return parseInt(codeSum)
}

export {value}