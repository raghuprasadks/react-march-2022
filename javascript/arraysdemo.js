marks=[20,22,23,18,17,25]
console.log('marks array ',marks)
console.log('data type of array ',typeof(marks))
console.log('length : ',marks.length);
marks.push(23)
marks.push(24)
console.log('After adding element to the end of the array ',marks);
marks.pop()
console.log('after deleting an element from the array : ',marks);
marks[0]=23
console.log('after updation ',marks)
marks.unshift(-2) // adding an element at the beginning 
console.log('after unshift ',marks);
console.log('display elements in the array')
for (i=0;i<marks.length;i++){
    console.log(marks[i]);
}
// create an array from blank
fruits=[]
fruits.push('Apple')
fruits.push('Banana')
fruits.push('Mango')
console.log(' fruits array ',fruits)
age=[23,'twenty four',25,'thirty']
console.log('age array mixed data types ',age)










