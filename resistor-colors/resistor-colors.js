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