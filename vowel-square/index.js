// https://www.coderbyte.com/editor/guest:Vowel%20Square:JavaScript
//
// Have the function VowelSquare(strArr) take the strArr parameter being passed
// which will be a 2D matrix of some arbitrary size filled with letters from the
// alphabet, and determine if a 2x2 square composed entirely of vowels exists in
// the matrix. For example: strArr is ["abcd", "eikr", "oufj"] then this matrix
// looks like the following:
//
// a b c d
// e i k r
// o u f j
//
// Within this matrix there is a 2x2 square of vowels starting in the second row
// and first column, namely, ei, ou. If a 2x2 square of vowels is found your
// program should return the top-left position (row-column) of the square, so
// for this example your program should return 1-0. If no 2x2 square of vowels
// exists, then return the string "not found". If there are multiple squares of
// vowels, return the one that is at the most top-left position in the whole
// matrix. The input matrix will at least be of size 2x2. 

module.exports = VowelSquare

function VowelSquare(strArray) {
    let charMatrix = strArray.map(str => [...str])
    for (let square of enumerateSquares(charMatrix))
        if (allVowels(square))
            return square.id
    return 'not found'
}

function enumerateSquares(charMatrix) {
    let squares = []
    for (let i = 0; i < charMatrix.length - 1; ++i)
        for (let j = 0; j < charMatrix[i].length - 1; ++j) {
            const square = [
                [charMatrix[i][j],   charMatrix[i][j+1]],
                [charMatrix[i+1][j], charMatrix[i+1][j+1]],
            ]
            square.id = `${i}-${j}`
            squares.push(square)
        }
    return squares
}

const VOWELS = ['a', 'e', 'i', 'o', 'u']
function allVowels(square) {
    return square.every(row => row.every(el => VOWELS.includes(el)))
}

if (module === require.main)
    console.log('vowel square: ', VowelSquare(process.argv[2]))
