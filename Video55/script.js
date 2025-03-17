// console.log("hey this is harry")
// var a=5;
// var b=6;

// console.log(a+b+8)
// const c=2
// d=c+6
// console.log(typeof(d))

// let z=55
// {
//     let z=22
//     console.log("inside z "+z)
// }
// console.log("outside z "+z)

// let o = {
//     name:"harry",
//     "job role": "dev",
//     "code name": "Maverick",
//     "is_handsome": true
// }
// o.salary = 25000
// console.log(o)
// o.salary = 50000
// console.log(o)
// o.salary = 75000
// console.log(o)
// let age=44;
// let x=10
// while(x>0){
//     console.log("*".repeat(x));
//     // console.log(x)
//     x--
// }
// let array=[1,2,3,4]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//         console.log(element)

    
// }


// let o = {
//     name:"harry",
//     "job role": "dev",
//     "code name": "Maverick",
//     "is_handsome": true
// }
// for (const key in o) {
//     if (Object.prototype.hasOwnProperty.call(o, key)) {
//         const element = o[key];
        
//         console.log(key)
//         console.log(element)
//     }
// }

// for (const element of "harry") {
//     console.log(element)
// }

// let i=1
// while (i<=3000) {
//     console.log("ilu "+i)
//     i++
// }
// let i=9
// do {
//     console.log("given i = "+i)
//     i++
// } while (i<=10);

// function add(aa,bb) {
//     return aa+bb
// }
// c = add(2,22)
// console.log(c)
//------------------------------------------------
// add = (xx,yy)=>{ return xx+yy}

// kk=add(22,33)
// console.log(kk)

// let str="kalki2678AD";
// console.log(str.toLowerCase())

// const str = "The quick brown fox jumps over the lazy dog.";

// const words = str.split(" ");
// console.log(words[2]);

// let a="pushpa";
// console.log(`${a} :the rule`)

// arr=[1,4,7]
// console.log(arr[1])
// s=arr.toString()

// console.log(s)
// console.log(typeof s)

//--------------String to Array---------------------
// let adjectives = "Crazy Amazing Fire Beautiful Fast Hot Cool Latest Popular Hitech"
// arr=adjectives.split(" ")
// console.log(arr)
//--------------Array to String-------------------
// str=arr.toString()
// str=arr.join("-")
// console.log(typeof str)

//------------Arrays are Mutable---------------
// let last=arr.pop(); //returns popped out element data
// console.log(last);
// console.log(arr)

// arr_len = arr.push("Fighter jet"); //returns array length
// console.log(arr_len);
// console.log(arr);

// first=arr.shift()
// console.log(first);
// console.log(arr);

// arr_len=arr.unshift("Submarines")
// console.log(arr_len);
// console.log(arr);

// delete arr[1]
// console.log(arr);

// a1=[1,2,3]
// a2=[4,5,6]
// a3=[7,8,9]
// n=a1.concat(a2,a3)
// console.log(n)
// console.log(a1)
// console.log(a2)
// console.log(a3)


// a=[3,1,7,5,9]
// a.sort()
// console.log(a)


//-------------splice-add-elements-to-array----------
// numbers=[1,2,3,4,5,9]
// deleted=numbers.splice(2,2,88,99)
// console.log(numbers);
// console.log(deleted);

// let a=[1,93,55,66,88]
// for (const element of a) {
//     console.log(element);
// }
// let a=[1,93,55,66,88]
// n=a.map(element=> {return element*2})
// console.log(a)
// console.log(n)

// av=a.map((v)=>{return v*v})
// console.log(av)

// let a=[2,5,8,6,9,0]
// greater=(x)=>{
//     return x<7? true:false
// }
// k=a.filter(greater)
// console.log(k)

// let a=[1,5,8,1]
// multi=(a,b)=>{return a*b;}
// console.log(a.reduce(multi))

