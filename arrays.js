var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  
  array = [...array, element]
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  
  array = array.unshift(element)
  
}

function addElementToEndOfArray(array, element) {
  array = [element, ...array]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = array.push(element)
}

function accessElementInArray(array, index) {
  console.log(array[index])
}

