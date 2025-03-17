// async function getData() {
//    return new Promise( (resolve,reject)=>{
//     setTimeout(() => {
//         resolve(455)
//     }, 5500);
//    } ) 
// }
async function getData() {
    
        let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let data1=await x.json(); 
        // console.log(data1);
        return data1
}

async function postData() {   
        let x= await fetch('https://jsonplaceholder.typicode.com/posts',{
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },               
        })
        let data1=await x.json();        
        return data1
}


async function main() {
console.log('loading modules');
console.log('loading something');
console.log('getting data');
// let data= await getData()
// console.log(data);
let data= await postData()
console.log(data);
console.log('processing data');
console.log('task2');
}

main()

