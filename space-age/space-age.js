// each planets orbital period in Earth years
const orbitalPeriods = {
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}

const age = (planet, age) => {
    // determines how old they are on earth by dividing their age in seconds, by one earth year in seconds
    let earthYears = age / 31557600
    // if they passed in Earth, then just return that number rounded two places
    if (planet === "earth") {
        return parseFloat(earthYears.toFixed(2))
    // if it's not earth find the orbital period in earth years for that planet, then divide their age in earth years by that planets orbital period in earth years and round it to places
    } else if (orbitalPeriods[planet]) {
        let planetAge =  earthYears / orbitalPeriods[planet]
        return parseFloat(planetAge.toFixed(2))
    } else {
        return "That's not a valid planet"
    }
}

export {age}