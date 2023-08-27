let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];
let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);
const updateSortReverse = (arr, ...letters) => {
    let combined = [...arr, ...letters];
    combined.sort();
    combined.reverse();
    return combined;
};
let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
console.log(reverseSort);