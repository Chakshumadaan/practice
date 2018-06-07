// console.log('Hello World')

var abc = 123
// console.log(typeof abc)

abc = 'Some String'
// console.log(typeof abc)

abc = null
// console.log(typeof abc)

abc=true
// console.log(typeof abc)

abc=123
// console.log(typeof abc)

abc=[123, 'some string' ,{name:'car'}]
// console.log(typeof abc)
console.log(globalVar)   //variable hoisting

var globalVar=123
console.log(globalVar)

function func(){
    // console.log(globalVar)

    var localVar='some local var'
    // console.log(localVar)
}

func()
//console.log(localVar) error generated as local cannot be accessed ousid ethe class
// console.log(globalVar)

function sum (a,b){
    return a+b
}
console.log(sum(1,2))
console.log(sum('abc','def'))

/*for (let step=0,step<5,step++){
    console.log('hey hello')
}
*/
function mul(a,b){
    return a*b
}

console.log(mul(1,'hi'))
console.log(mul(2,5))

var sqr=function square(number){
    return number*number
}(20) //immidiately invoked functinal expression
console.log(sqr)


function addsquare(a,b){ 
    function square(x){
        return x*x;
    }
    return (a)+ square(b)

}
console.log(a=addsquare(1,3))
console.log(b=addsquare(3,4))
console.log(c=addsquare(5,6))


