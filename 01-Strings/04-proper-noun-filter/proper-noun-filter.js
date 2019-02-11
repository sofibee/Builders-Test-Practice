const properNounFilter = (string) => {
    for (let i = 0; i < string.length; i++) {
        let currChar = string[i];
        if (i === 0 ) {
            if (currChar.toUpperCase() !== currChar) return false
        } else {
            if (currChar.toLowerCase() !== currChar) return false
        }
    }
    return true
}