import { isWinner } from "../src/checking_bing_card";

describe ('checking bingo card', () => {
  const numbersCalled = [1, 2, 3, 4, 5, 16, 17, 18, 19, 20, 31, 32, 33, 34, 46, 47, 48, 49, 50, 61, 62, 63, 64, 65]
  test('player winner', () => {
    const bingoCard = [
      [1, 2, 3, 4, 5],
      [16, 17, 18, 19, 20],
      [31, 32, 'FREE', 33, 34],
      [46, 47, 48, 49, 50],
      [61, 62, 63, 64, 65],
    ];
    expect(isWinner(numbersCalled, bingoCard)).toBe(true);
  })
  
  test('player not winner',() => {
    const bingoCard = [
      [1, 2, 3, 4, 11],
      [16, 17, 18, 19, 20],
      [31, 32, 'FREE', 34, 35],
      [46, 47, 48, 49, 50],
      [61, 62, 63, 64, 65],
    ];
    expect(isWinner(numbersCalled, bingoCard)).toBe(false)

  })
});