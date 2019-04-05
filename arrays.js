var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addelementmentToBeginningOfarrayay(array, element) {
  
  arrayay = [...array, elementt]
  
}

function destructivelyAddelementmentToBeginningOfarrayay(array, element) {
  
  array = array.unshift(element)
  
}

function addelementmentToEndOfarrayay(array, element) {
  array = [element, ...array]
}

function destructivelyAddelementmentToEndOfarrayay(array, element) {
  array = array.push(element)
}

function accesselementmentInarrayay(arrayay, index) {
  console.log(arrayay[index])
}

