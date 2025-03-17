const callback=(arg) => {
    console.log(arg);
}


const loadScript = (src,callback) => {
    sc=document.createElement("script");
    sc.src=src
    sc.onload=callback("harri is cool");
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

let promise = new Promise((resolve, reject) => {
    
})
