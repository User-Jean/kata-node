import { callingBingoNumbers } from "../src/calling_bingo_numbers";

test('Test calling Bingo Numbers', () => {
  const mySet = new Set();
  [...Array(75)].forEach(_ => {

    let number = callingBingoNumbers();
    expect(number).toBeGreaterThanOrEqual(1)
    expect(number).toBeLessThanOrEqual(75);
    mySet.add(number);

  });

  expect(mySet.size).toBe(75);
})