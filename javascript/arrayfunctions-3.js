const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log('frutis array ',fruits)
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log('after splice 1',fruits)
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log('after splice 2',fruits)
fruits.splice(0, 1);
console.log('after splice 3',fruits)
const citrus = fruits.slice(1);
console.log('after slice 1',citrus)
const citrus1 = fruits.slice(1, 3);
console.log('after slice 2',citrus)
console.log('sorting strings')
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

console.log('sorting numbers')
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log('sorted array :ascending',points)
points.sort(function(a, b){return b - a});
console.log('sorted array :descending',points)
console.log("Maximum ",Math.max.apply(null, points))
console.log("Minimum ",Math.min.apply(null, points))
