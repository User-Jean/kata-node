
export function isWinner(numberCalled, bingoCard){
  let result = true;
  bingoCard.forEach(array => {
    array.forEach(number => {
      if(number !== 'FREE') {
        if(!numberCalled.find(e => e === number)) {
          result = false;
        }
      }
    })
  })
  return result;
}