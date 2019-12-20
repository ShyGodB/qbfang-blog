const numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'x'];
const uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'X'];

const randomString = (count) => {
    if (!count) count = 18
    let result = '';
    let arr = numberArray.concat(uppercaseArray, lowercaseArray);
    const length = arr.length;
    for (let i = 0; i < count; i++) {
        result += arr[Math.floor(Math.random() * length)];
    }
    return result;
}

module.exports = { randomString }
