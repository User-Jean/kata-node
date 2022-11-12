import { delimiters, generateBingoCards } from "../src/generate_bing_cards";


describe ('Generate bingo card', () => {
  const arrayBidimensional = generateBingoCards()
  test('25 uniques spaces', () => {
    const set = new Set();
    arrayBidimensional.forEach(array => {
      array.forEach(number => {
        set.add(number);
      })
    })
    expect(set.size).toBe(25);  
  })
  
  test('Columnas only contains numbers between LowerBounded upperBounded',() => {
    let row = 1, column = 1;
    arrayBidimensional.forEach(array => {
      column = 1;
      array.forEach(item => {
        // omitted space in the middle FREE
        if(column === 3 && row === 3) return
        expect(item).toBeGreaterThanOrEqual(delimiters[row].upperBound)
        expect(item).toBeLessThanOrEqual(delimiters[row].lowerBound);
        column++;
      })
      row++;
    })
  })

  test('Middle space FREE', () => {
    expect(arrayBidimensional[2][2]).toBe('FREE')
  })
});