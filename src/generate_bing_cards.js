export const delimiters = {
  1: {upperBound: 1, lowerBound: 15},
  2: {upperBound: 16, lowerBound: 30},
  3: {upperBound: 31, lowerBound: 45},
  4: {upperBound: 46, lowerBound: 60},
  5: {upperBound: 61, lowerBound: 75},
}

export function generateBingoCards() {
  const bingoCard = [
    [1, 2, 3, 4, 5], 
    [16, 16, 16, 16, 16], 
    [30, 31, 'FREE', 31, 31], 
    [46, 46, 46, 46, 46], 
    [61, 61, 61, 61, 61]
  ]
  return bingoCard;
}