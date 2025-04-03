async function effect(i, t) {
    const textElement = document.querySelectorAll(".text")[i];
    const dotElement = document.querySelectorAll(".dot")[i];
    function randNumGenerator() {
        return Math.ceil(Math.random()*700)
    }
    
    await new Promise(resolve => {
        setTimeout(() => {
            textElement.textContent = `${t}`;
            resolve();
        }, randNumGenerator());
    });

    await new Promise(resolve => {
        setTimeout(() => {
            dotElement.textContent = ".";
            resolve();
        }, randNumGenerator());
    });

    await new Promise(resolve => {
        setTimeout(() => {
            dotElement.textContent = "..";
            resolve();
        }, randNumGenerator());
    });

    await new Promise(resolve => {
        setTimeout(() => {
            dotElement.textContent = "...";
            resolve();
        }, randNumGenerator() );
    });

    if(i==4){
        await new Promise(resolve => {
            setTimeout(() => {
                document.querySelector(".hack").style.border="4px solid rgb(46, 247, 46)";
                document.querySelector(".hack").textContent=" HACKING SUCCESFUL"
                resolve();
            }, randNumGenerator());
        });
    }


}

async function main(i1, t1, i2, t2,i3,t3,i4,t4,i5,t5) {
    await effect(i1, t1);
    await effect(i2, t2);
    await effect(i3, t3);
    await effect(i4, t4);
    await effect(i5, t5);
    
}

main(0, "Initialising hacking", 1, "Reading your files",2, "Passsword files Detected", 3, "Sending all passwords and personal files to server",4,"Cleaning up");



// const jsonObject = { key: 'value' ,name:"harry",job:"dev"};
// localStorage.setItem('jsonObject', JSON.stringify(jsonObject));

// const storedObject = JSON.parse(localStorage.getItem('jsonObject'));
// console.log(storedObject);


//-----------------------------------8,9,10-Problems&Solutions--Video83---------------------------------

// async function double(num) {
    
//     return new Promise( (resolve,reject)=>{
//         setTimeout(() => {
//             resolve(num=num*2)           
//         }, 1500);
        
//     } )
// }
// async function main1() {
//     arr=[1,2,3,4]
//     for  (e of arr) {
//         o=await double(e)
//         console.log(o);  
//     }    
// }

// main1()



// async function order(i) {
//     return new Promise( (resolve,reject)=>{
//         setTimeout(() => {
//             resolve(`${i} are ordered`)
            
//         }, 2000);
//     } )
// }

// async function main1(i) {
//     o=await order(i)
//     console.log(o);
    
// }

// main1("Shoes, Shirts, Pants and Inners")


// async function coffee(i) {
//     return new Promise( (resolve,reject)=>{
//         setTimeout(() => {
//             resolve(`${i} are ready to serve`)
//         }, 2000);
//     } )
// }

// async function main1(i) {
//     console.log(`${i} are ordered`);
    
//     o=await coffee(i)
//     console.log(o);
    
// }
// main1("Latte and Capachino")