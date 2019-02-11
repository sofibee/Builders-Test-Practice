const palindrome = (string) => {
    let newString = string.toLowerCase();
    if (newString.length > 1) {
        let firstChar = newString[0];
        let lastChar = newString[newString.length-1];

        if(firstChar !== lastChar) {
            return false
        }
        return palindrome(newString.slice(1,-1));
    } 
    return true
}