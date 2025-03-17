function createcard(title, cname, views, monthsold, duration, thumbnail){

    document.body.innerHTML+= '<div class="container"><div class="box"><img class="mythumbnail"  src="" alt="thumbnail image"><span class="myduration"></span></div><div class="texts"><h2 class="heading"></h2><p><ul class="ulist"><li class="mycname"></li><li class="mynewviews"></li><li class="mymonthsold"></li></ul></p></div></div>'


    if(views>1000 && views<1000000){newviews=Math.floor(views/1000)+"K"}
    else if(views>1000000 && views<1000000000){newviews=Math.floor(views/1000000)+"M"}
    else if(views>1000000000){newviews=Math.floor(views/1000000000)+"B"}
    else{newviews=views}
    document.querySelectorAll(".heading").forEach(e=>{e.textContent=title});
    document.querySelectorAll(".mycname").forEach(e=>{e.textContent=cname});
    document.querySelectorAll(".mynewviews").forEach(e=>{e.textContent=newviews});
    document.querySelectorAll(".mymonthsold").forEach(e=>{e.textContent=monthsold});
    document.querySelectorAll(".myduration").forEach(e=>{e.textContent=duration});
    document.querySelectorAll(".mythumbnail").forEach(e=>{e.src=thumbnail});


}


let harrycard = ()=>{ createcard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 526000, "7 months old", "31:22", "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB4h3uLYCuzx1GRi4VEg_QRgdPr0w")}

harrycard()
harrycard()
harrycard()
harrycard()
//------------------------------------------------------------------------------------------
// document.querySelector(".thumbnail").src="https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB4h3uLYCuzx1GRi4VEg_QRgdPr0w"

// document.querySelector(".duration").textContent="31:22"
// document.querySelector(".texts").children[0].textContent="Installing Vs code & how websites work | sigma web development course"
// document.querySelector(".ulist").children[0].textContent="codewithharry"
// document.querySelector(".ulist").children[1].textContent="747K"
// document.querySelector(".ulist").children[2].textContent="2 months old"