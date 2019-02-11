const removeZeros = (num) => {
    let stringNum = num.toString();
    let newNum = '';

    if (stringNum === '0') return NaN;
    for (let i = 0; i < stringNum.length; i++) {
        let currChar = stringNum[i];

        if (currChar !== '0') newNum += currChar;
    }
    return parseInt(newNum);
    
}