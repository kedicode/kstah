const figlet = require("figlet");

function app() {
    //  capture the time that is entered in to kstah
    const countdown = process.argv[2];
    console.log(countdown);
    let totalInterval = parseInt(countdown * 60);
    const running = setInterval(() => {
        console.clear();
        figlet(totalInterval--, (err, data) => {
            console.log(data);
        });

        if(totalInterval < 0){
            clearInterval(running);
        }
    }, 1000);

}

app();
