// Code your solution here

function findMatching(drivers, nameCheck) {
    const result = drivers.filter(name => name.toUpperCase() === nameCheck.toUpperCase())
        return result
}

function fuzzyMatch(drivers, stringCheck) {
    const result = drivers.filter(firstLetters => firstLetters.toUpperCase().startsWith(stringCheck.toUpperCase()))
    return result
}

function matchName(drivers, checkName) {
    const result = drivers.filter(drivers => drivers.name.toUpperCase() === checkName.toUpperCase())
    return result
}