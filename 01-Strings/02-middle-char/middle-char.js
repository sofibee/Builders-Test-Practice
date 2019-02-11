const getMid = (string) => {
    let midLeft = Math.ceil(string.length / 2 - 1);
    let midRight = midLeft + 2;
    let midChar = '';
    if (string.length % 2 === 0) {
        console.log('hello');
        midChar = string.slice(midLeft,midRight);
    } else {
       midChar =  string[midLeft];
    }
    return midChar;
}
