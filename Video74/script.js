let button=document.getElementById("btn")
button.addEventListener("mousedown",()=>{
    document.querySelector(".box").textContent="Superrrrrrrrrr!!!"
})
button.addEventListener("mouseup",()=>{
    document.querySelector(".box").textContent="hey iam a box!!!"
})
document.addEventListener("keydown",(e)=>{
    console.log(e.key)
})


// function r(num) {
//     return Math.floor(Math.random()*num)
// }
// document.querySelector(".box").style.backgroundColor=`rgb( ${r(255)}, ${r(255)}, ${r(255)} )`
