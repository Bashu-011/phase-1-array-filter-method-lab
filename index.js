function findMatching(drivers, name){
    const lowerName = name.toLowerCase()
    return drivers.filter(driver => {
        const lowerDriver = driver.toLowerCase()
        return lowerDriver === lowerName}
        )
}

function fuzzyMatch(drivers, name){
    const lowerCaseName = name.toLowerCase();

  return drivers.filter(driver => {
    const lowerCaseDriverName = driver.toLowerCase();
    const beginningLetters = lowerCaseDriverName.slice(0, lowerCaseName.length);
    return beginningLetters === lowerCaseName;
  });
}

function matchName(drivers, name){
    const lowerName = name.toLowerCase()
    return drivers.filter(driver => {
        const lowerDriver = driver.name.toLowerCase()
        return lowerDriver ===lowerName})
}
