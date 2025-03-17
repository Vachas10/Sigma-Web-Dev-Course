 r = Math.floor(Math.random() * 5)
 red = Math.floor(Math.random() * 255)
 blue = Math.floor(Math.random() * 255)
 green = Math.floor(Math.random() * 255)
 
document.querySelectorAll(".box")[r].style.color=`rgb(${blue},${green},${red})`

document.querySelectorAll(".box")[r].style.backgroundColor=`rgb(${red},${blue},${green})`



