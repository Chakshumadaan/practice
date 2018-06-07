/*
var stu={
    rollno:'2815025',
    name:'chakshu',
    city:'panipat'
}
for (runner in stu){
    console.log(runner+' '+stu[runner])
}


function place(city, state, country){
    this.city= city,
    this.state=state,
    this.country=country   //this keyword refers the meory location
    this.area='Huda'//this is a constant property as it always returns same value
    this.getcity= function(){
        return this.city = 'Nangal'
    }
}
var mypalce1 = new place('panipat','haryana','india') 
var mypalce2 = new place('delhi','delhi','india') 
//console.log(mypalce)
//console.log(Object.keys(mypalce)) //displays the keys in object

mypalce1.area='Model Town' //new property is added to object
console.log(mypalce1)
delete mypalce1.country
console.log(mypalce1)
console.log(Object.keys(mypalce1)) 
//console.log(mypalce.getcity())


var fruit ={name:'apple'}
var fruitbeer={name:'apple'}
console.log(fruit==fruitbeer)// returns false
console.log(fruit===fruitbeer)// returns false

var fruit={name:'apple'}
var fruitbeer=fruit;
console.log (fruit==fruitbeer)// returns true
console.log(fruit===fruitbeer)// returns true


var o ={
    a=7,
    get b(){
        return this.a+1;
    },
    set c(x){
        this.a=x/2;
    
    }
};
console.log(o.a);
console.log(o.b);
o.c=50;
console.log(o.a)


var arr=['chakshu','2815025',123,[565],{name:'Cahkshu'},[125],'this string'];
console.log(arr);
console.log(arr[0],arr[9]);
arr[9]='changed value'
console.log(arr[9])
arr[9.1]='another change'
console.log(arr)
console.log(arr[0],arr[9])
console.log(arr.length)
//for each is used for the purpose of looping
arr.forEach(function(item,index,arr) {
    console.log(item,index)
}
);
 
*/

var sum=(a,b) => {return a+b}
console.log(sum(3,4))

var arr=[5,12,33,45,344]
var found =arr.find(function(element){
    return element>10
});


var words = ['spray','123','432423424','limit','elite','destruction','present']
var prereexp = /pr/;
const result = words.filter(word=> word.match(prereexp));
console.log(result)