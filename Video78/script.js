async function effect(i, t) {

        setTimeout(() => {
            document.querySelectorAll(".text")[i].textContent=`${t}`
        }, 1000);
        setTimeout(() => {
            document.querySelectorAll(".dot")[i].textContent="."
        }, 2000);
        setTimeout(() => {
            document.querySelectorAll(".dot")[i].textContent=".."
        }, 3000);
        setTimeout(() => {
            document.querySelectorAll(".dot")[i].textContent="..."
        }, 4000);
         return 1 
}

async function main(i, t) {
        await effect(i, t);
        console.log('completes fulfilled');
        
        return 2
        
}
main(0, "Initialising hacking")
// main(1, "Reading files")

