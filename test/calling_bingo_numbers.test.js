import { callingBingoNumbers } from "../src/calling_bingo_numbers";

test('Test calling Bingo Numbers', () => {
  const mySet = new Set();
  [...Array(74)].forEach(_ => {

    let number = callingBingoNumbers();
    console.log(number)
    expect(callingBingoNumbers()).toBeGreaterThanOrEqual(1)
    expect(callingBingoNumbers()).toBeLessThanOrEqual(75);
    mySet.add(number);

  });

  expect(mySet.size).toBe(75);
})