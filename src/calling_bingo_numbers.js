const numbers = {};

// Validate the number exist
function numberExists(number) {
  if(numbers[number]) return true;
  return false;
}

export function callingBingoNumbers() {
  // number random between 1 - 75
  let number;
  do {
    number = Math.floor(Math.random() * 75 + 1)
  } while(numberExists(number))
  numbers[number] = true;

  return number;
}
