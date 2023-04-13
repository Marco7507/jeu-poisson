const fish = () => {
  // return a fish object with random caracteristics
  const fishNameList = ['fish1', 'fish2', 'fish3', 'fish4', 'fish5']
  const fishColorList = ['blue', 'red', 'green', 'yellow', 'black']
  const fishLength = Math.random() * 100
  const fishWeight = Math.random() * 100
  const fishName = fishNameList[Math.floor(Math.random() * fishNameList.length)]
  const fishColor = fishColorList[Math.floor(Math.random() * fishColorList.length)]

  return {
    name: fishName,
    weight: fishWeight,
    length: fishLength,
    color: fishColor
  }
}

module.exports = fish