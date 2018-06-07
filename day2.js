var strVar='some string'
console.log(typeof strVar)
console.log(strVar.length)

var newstr = new String('ABC')
console.log(typeof newstr)
console.log(newstr.length)

var a=['hi','hello']
console.log(a[1])
console.log(a.length)

function joinstr(p1,p2){
    if ((typeof p1==typeof p2)&&(typeof p1=='string'))
{
    return p1+p2
}
else{
    return false
}
}
console.log(joinstr ('abc','def'))
console.log(joinstr ('abc',123))

function namesplit(name){
    let splitname = name.split('@')
    console.log(splitname)
}
namesplit('chakshu@gmail.com')

function namesplit1(name){
     let splitname1 = name.split(' ')
console.log(name)
    console.log(splitname1)
    var initial1 = splitname1[0]
    var initial2 = splitname1[1]
    console.log(initial1[0]+initial2[0])
}
namesplit1('Chakshu Madaan')

function hell(name){
    var st = Number.parseFloat(23.68,33.4)
    
    console.log(st)
}
hell()

function randomnumbers(numberofrandom){
    for (let i=0;i<numberofrandom;i++){
        console.log(parseInt(Math.random()*100))
    }
}

randomnumbers(10)

var auto = new Object()

auto.name ='volkswagen'
auto.enginetype ='Diesel'
auto.year= '2012'
console.log(auto)

for (runner in auto){
    console.log(runner +'' +auto[runner])
    console.log(Object.keys(auto))
}


var library = {
    book:'shwashank',
    author:'unknown',
    year:'2000'
 }
 console.log(typeof library)
 console.log(library)
 console.log(Object.keys(library))
 