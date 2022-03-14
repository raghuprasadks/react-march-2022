console.log('map')
marks = [2,4,8,16,9,15,17]
function mapDemo(value){
    return value*2;
}
marksupd = marks.map(mapDemo)
console.log('new array after map ',marksupd)
console.log('filter demo')
function filterDemo(value){
    return value%2==0
}
filteredmarks = marks.filter(filterDemo)
console.log('after filter ',filteredmarks)

// similar way try other functions
// reduce,any,some,find,includes,etc..

