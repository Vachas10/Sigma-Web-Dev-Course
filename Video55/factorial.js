let n=11;
if(n==0){
    
    console.log("1")
}

else{
    
    let a=[];
    for (let index = 0; index < n; index++) {
    a.push(index+1)
    }

    mul=(a,b)=>{return a*b}
    console.log(a.reduce(mul))

}
