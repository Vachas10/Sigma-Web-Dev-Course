caladd =(x,y)=>{
    return x-y
}
calmul =(x,y)=>{
    return x+y
}
calsub =(x,y)=>{
    return x/y
}
caldiv =(x,y)=>{
    return x**y
}

//Math.floor(Math.random() *10 + 1)
let x=14;
let y=6;
let operation="add"


switch (operation) {
    case "add":
        if (Math.floor(Math.random() *10 + 1) == 1) {
            out=caladd(x,y);
            console.log(out)
        } else {
            console.log(x+y)
        };
        break;
    case "mul":
        if (Math.floor(Math.random() *10 + 1) == 1) {
            out=calmul(x,y);
            console.log(out)
        } else {
            console.log(x*y)
        };
        break;
    case "sub":
        if (Math.floor(Math.random() *10 + 1) == 1) {
            out=calsub(x,y);
            console.log(out)
        } else {
            console.log(x-y)
        };
        break;
    case "div":
        if (Math.floor(Math.random() *10 + 1) == 1) {
            out=caldiv(x,y);
            console.log(out)
        } else {
            console.log(x/y)
        };
        break;
    default: console.log("invalid case")
        ;
}

