var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  
  array = [...array, element]
  return array
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  
  array = array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  array = [element, ...array]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = array.push(element)
  return array
}

function accessElementInArray(array, index) {
  console.log(array[index])
  
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(0)
}
