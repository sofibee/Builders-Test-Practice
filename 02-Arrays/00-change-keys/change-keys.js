const changeKeys = (array, num) => {
    let keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    for (let i = 0; i < array.length; i++) {
        let currNote = array[i];
        let currIdx = keys.indexOf(currNote);
        let newNum = (currIdx + num) % 12;
        array[i] = keys[newNum];
    }
    return array; 
}