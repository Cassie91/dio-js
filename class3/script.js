// Arrys and objects, what are they, what do they do, how do they survive?

// How do I create an array?
// let array = ['string', 1, true];
// console.log(array);

// can store many data types
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
// console.log(array);

// forEach > execute something on every array item.
// array.forEach(function(item, index){console.log(item, index)});

// push > add new last item
// array.push('new item');
// console.log(array);

//pop > delete last item
// array.pop();
// console.log(array);

// shift > delete first item
// array.shift()
// console.log(array);

// unshift > add new first item
// array.unshift('new item');
// console.log(array);

// indexOf > returns an specific item index
// console.log(array.indexOf(true));

// splice > delete selected items
// array.splice(0, 3);
// console.log(array);

// slice > assign selected items to a new array
// let newArray = array.slice(0, 3)
// console.log(newArray);