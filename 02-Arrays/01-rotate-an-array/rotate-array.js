const rotate = (array, numRotate) => {
    for (let i = 0; i < numRotate; i++) {
            array.unshift(array.pop())
    }
    return array
}