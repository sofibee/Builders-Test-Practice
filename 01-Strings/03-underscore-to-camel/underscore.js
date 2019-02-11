const underToCamel = (string) => {
    let arrString = string.split('_');
    for (let i =1; i < arrString.length; i++) {
        let currentString = arrString[i].toLowerCase();
        arrString[i] = currentString[0].toUpperCase()+currentString.slice(1);
        console.log(currentString);
    }
    return arrString.join('');
}