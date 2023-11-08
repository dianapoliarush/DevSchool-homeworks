function totalPerimeter(arr) {
    let perimeter = 0;

    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (arr[row][col] === 'X') {
                // for top cell
                if (row === 0 || arr[row - 1][col] === 'O') perimeter ++;
                // for bottom cell
                if (row === arr.length - 1 || arr[row + 1][col] === 'O') perimeter ++;
                // for left cell
                if (col === 0 || arr[row][col - 1] === 'O') perimeter ++;
                // for right cell
                if (col === arr[row].length - 1 || arr[row][col + 1] === 'O') perimeter ++;
            }
        }
    }

    return "Total land perimeter: " + perimeter;
}


console.log(totalPerimeter( [
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'
]));

console.log(totalPerimeter([
    'XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO'
]));

console.log(totalPerimeter([
    'XOOOOXXX',
    'XOOOXXXX',
    'XOOOOOOO',
    'XXOOOOOO',
    'XXOOOOOO'
]));
