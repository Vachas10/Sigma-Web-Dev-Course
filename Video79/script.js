// let a=prompt("enter a number")
// let b=prompt("enter a second number")
// if(isNaN(a) || isNaN(b)){
//     throw SyntaxError("sorry input not a number")
// }
// let sum=parseInt(a)+parseInt(b)
// try {
//     console.log("the sum is " + sum*x);    
// } 
// catch (error) {
//     console.log('error aa gaya bhaiiii dekklo zaraaaa');
//     console.log(error);
// }
// finally{
//     console.log("files are closing finally");
    
// }

// let obj={
//     a:1,
//     b:"harry"
// }
// console.log(obj);
// let animal={
//     eats:true
// }
// let rabbit={
//     jumps:true
// }
// rabbit.__proto__=animal
// console.log(rabbit);

class Animal{
    constructor(name){
        console.log("object is created");
        this.name= name;
        
    }
    eats(){
        console.log("khaa rahah hoon");
        
    }
    jumps(){
        console.log("jumping jack");
        
    }
}
class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("object is created and he is a lion");
        
}
eats(){
    super.eats()
    console.log("khaa rahah hoon roarrrrrrrrrrrrrr");
    
}
}
// let a= new Animal("Bunny")
// console.log(a);
l = new Lion("Shera")
console.log(l);





