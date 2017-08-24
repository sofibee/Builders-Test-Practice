##My Slice

Write a function mySlice that mirrors the behavior of JavaScript's [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) array method. 

The slice() method returns a copy of a portion of an array into a new array object selected from arguments begin to end (end not included). The original array will not be modified.  However,  unlike the built in method, mySlice will accept the array to operate on as its first parameter, rather than being invoked as a method on that array.  Try and mirror the behavior of the native .slice() method exactly.    

A few things to keep in mind: the `begin` and `end` arguments are optional, `end` can be a negative number, and mySlice should not modify the original array!

Note: Do not use the native .slice() method in your own implementation!  

###Examples


- INPUT: `mySlice([1,2,1]);`
- OUTPUT: `[1, 2, 1]`

- INPUT: `mySlice([1,2,1], 1);`
- OUTPUT: `[2, 1]`

- INPUT: `mySlice([1,2,3,4], 2, 3);`
- OUTPUT: `[3]`

- INPUT: `mySlice([1,2,3,4], 0, -1);`
- OUTPUT: `[1, 2, 3]`