let adjectives = "Crazy Amazing Fire Beautiful Fast Hot Cool Latest Popular Hitech"
let shops = "Engines Foods Garments Cars Hats Shoes Mobiles Bags Hotels Homes"
let extras = "Bros Limited Hub Retails Corp Org Farms Solutions"

let a=adjectives.split(" ")
let s=shops.split(" ")
let e=extras.split(" ")
console.log(a[Math.floor(Math.random() *10 )] + s[Math.floor(Math.random() *10 )] + e[Math.floor(Math.random() *7 )])