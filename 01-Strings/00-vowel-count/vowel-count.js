/* 
Create a JavaScript function called `vowelsCount(str)`. The str aka string parameter being passed should return the number of vowels the string contains. Do not count y as a vowel for this challenge.

For Example:

```
// INPUT: 'David Yang'
vowelsCount('David Yang');
// OUTPUT: 3;
```

```
// INPUT: 'Nimit Maru'
vowelsCount('Nimit Maru');
// OUTPUT: 4;*/


const vowelsCount = (string) => {
    let count= 0;

    let vowels = {
        a: null,
        e: null,
        i: null,
        o: null,
        u: null
    };

    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i].toLowerCase();


        for (let key in vowels) {
            if (key === currentChar) {
                count++;
            }
        }
    }
    return count;
}