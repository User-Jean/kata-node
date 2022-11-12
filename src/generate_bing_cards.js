export const delimiters = {
  1: {upperBound: 1, lowerBound: 15},
  2: {upperBound: 16, lowerBound: 30},
  3: {upperBound: 31, lowerBound: 45},
  4: {upperBound: 46, lowerBound: 60},
  5: {upperBound: 61, lowerBound: 75},
}

export function generateBingoCards() {
  const bingoCard = [];
  let row;
  for (let i = 0; i <5; i++){
    row = [];
    for(let j = 0; j <5; j++) {
      let number;
      do{
        let max = delimiters[i + 1].lowerBound;
        let min = delimiters[i + 1].upperBound;
        number = Math.floor(Math.random() * (max -min + 1) + min);
      } while(row.find(e => e === number));
      row.push(number);
    }
    bingoCard.push(row);
  }
  bingoCard[2][2] = 'FREE';
  return bingoCard;
}