// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  const new_driver = {...driver}
  new_driver[key] = value
  return new_driver

}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return driver[key] = value
}
