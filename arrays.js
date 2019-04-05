var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  
  array = [...array, element]
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  
  array = array.unshift(element)
  
}

function addElementToEndOfArray(arr, ele) {
  array = [ele, ...arr]
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  arr = arr.push(ele)
}

function accessElementInArray(array, index) {
  console.log(array[index])
}

