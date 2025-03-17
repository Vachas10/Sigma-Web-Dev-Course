async function effect(i, t) {
    const textElement = document.querySelectorAll(".text")[i];
    const dotElement = document.querySelectorAll(".dot")[i];
    function randNumGenerator() {
        return Math.ceil(Math.random()*3000)
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
    console.log('completes fulfilled');
    await effect(i2, t2);
    console.log('completes fulfilled');
    await effect(i3, t3);
    console.log('completes fulfilled');
    await effect(i4, t4);
    console.log('completes fulfilled');
    await effect(i5, t5);
    console.log('completes fulfilled');
    
}

main(0, "Initialising hacking", 1, "Reading your files",2, "Passsword files Detected", 3, "Sending all passwords and personal files to server",4,"Cleaning up");
