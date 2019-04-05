var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, ele) {
  
  arr = [...arr, ele]
  
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  
  arr = arr.push(ele)
  
}

