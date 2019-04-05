var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  
  array = [...array, element]
  
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  
  arr = arr.unshift(ele)
  
}

function addElementToEndOfArray(arr, ele) {
  arr = [ele, ...arr]
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  arr = arr.push(ele)
}

function accessElementInArray(array, index) {
  console.log(array[index])
}

