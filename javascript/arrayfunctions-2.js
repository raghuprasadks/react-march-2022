const cars = [
    "Saab",
    "Volvo",
    "BMW"
  ];
// cars=['Toyota','Audi'] - it throughs error
const cars1 = [];
cars1[0]= "Saab";
cars1[1]= "Volvo";
cars1[2]= "BMW";
// not the preferred way of creating an array
const cars1 = new Array("Saab", "Volvo", "BMW");
console.log('sort in ascending order',cars1.sort())
// for each
console.log('for each')
const fruits = ["Banana", "Orange", "Apple", "Mango"];
function displayItem(value)
{ 
    console.log('item ##',value)
}
fruits.forEach(fruits)

console.log('for each with value,index and array as parameters')
function displayItem(value,index,arry)
{ 
    console.log('value',value, 'Index ',index,'array ',arry)
}
fruits.forEach(fruits)
console.log('to check the given object is array or not')
console.log('is an array ',Array.isArray(fruits))
instance = fruits instanceof Array;
console.log('another way of checking an array ',instance)



