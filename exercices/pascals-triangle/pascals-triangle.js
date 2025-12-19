//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (count) => {
  const triangle = [];

  for (let i = 0; i < count; i++) {
    const row = [];

    for (let j = 0; j <= i; j++) {

      if (j === 0 || j === i) {
        row.push(1);
      } else {

        const prevRow = triangle[i - 1];
        const sum = prevRow[j - 1] + prevRow[j];
        row.push(sum);
      }
    }

    triangle.push(row);
  }

  return triangle;
};