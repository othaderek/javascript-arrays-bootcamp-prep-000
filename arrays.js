var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  
  array = [...array, element]
  return array
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  
  array = array.unshift(element)
  console.log(array)
}

function addElementToEndOfArray(array, element) {
  array = [element, ...array]
  console.log(array)
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = array.push(element)
  console.log(array)
}

function accessElementInArray(array, index) {
  console.log(array[index])
  
}

