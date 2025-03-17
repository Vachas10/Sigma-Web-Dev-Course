console.log('Welcome to promises');

let prom1= new Promise( (resolve,reject)=>{
    let a=Math.random()
    if(a<0.5){
        reject("random is rejected, no supporting---p1")
    }
    else{
        setTimeout(() => {
            // console.log('yes iam done after 3s---p1');
            resolve("hamayyya resolved----p1")
        }, 3000);
    }
    
} )

// prom1.then((a)=>{
//     console.log(a);
// }).catch((a)=>{
//     console.log(a);    
// })

let prom2= new Promise( (resolve,reject)=>{
    let a=Math.random()
    if(a<0.5){
        reject("random is rejected, no supporting --p2")
    }
    else{
        setTimeout(() => {
            // console.log('yes iam done after 3s  --p2');
            resolve("hamayyya resolved --p2")
        }, 1000);
    }
    
} )

let p3=Promise.any([prom1,prom2])
p3.then(a=>{
    console.log(a)
}).catch(e=>{
    console.log(e);
    
})

