var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, ele) {
  
  arr = [...arr, ele]
  
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

