var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  
  const array = [element, ...array]
  return array
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  
  array = array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = array.push(element)
  return array
}

function accessElementInArray(array, index) {
  console.log(array[index])
  
}

