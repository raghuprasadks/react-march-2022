/**
 * Operators
 */
// Arithmetic - +,-,*,/,%,**
num1 = 100
num2 = 200
res= num1 +num2
console.log('Operator - +',res)
num3 = 50
res= num2%num3
console.log('Operator - %',res)
/**
 * Relational /comparision - >,<,>=,<=,==,!=,===
 */
num1 = 100
num2 = 150
num3 = 175
console.log( ' num1 > num2 ',(num1>num2))
res = num1 == num2
console.log(' num1 == num2 ',res)
num4='100'
res = num1 ==num4
console.log('num1 == num4 ',res)
res = num1 ===num4
console.log('num1 === num4 ',res)
/**
 * Logical Operators - &&,||,not
 */
num1=100
num2=50
num3=150
res = (num1>num2) && (num3>num2)
console.log(' result of (num1>num2) && (num3>num2) ',res)
res = (num2>num1) || (num3>num2)
console.log(' result of (num2>num1) || (num3>num2) ',res)
res = ! ((num2>num1) || (num3>num2))
console.log(' result of not (num2>num1) || (num3>num2) ',res)

/**
 * Unary operator
 */
num1=10
result = num1++
console.log('++ post: num1 ',num1)
console.log('++ : result ',result)
result = ++num1
console.log('++ pre: num1 ',num1)
console.log('++ : result ',result)
/**
 * ternary operator - ?
 */
result = 100>50 ? 'greater':'lesser'

console.log('Ternary operator ',result)


