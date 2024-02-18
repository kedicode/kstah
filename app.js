const figlet = require("figlet");
const tty = require("node:tty");

function app() {
    //  capture the time that is entered in to kstah
    const countdown = process.argv[2];
    const message = process.argv[3];
    console.log(countdown);
    let totalInterval = parseInt(countdown * 60);
    // get our process
    const ttyProcess = process.stdout;
    const running = setInterval(() => {
        // ttyProcess.cursorTo(0, 0, () => {
        //     console.clear();
        // });
        console.clear();
        // const [width, height] = ttyProcess.getWindowSize();
        // const x = Math.floor(Math.random() * width);
        // const y = Math.floor(Math.random() * height);
        // ttyProcess.cursorTo(x, y);
        figlet(`${message}: ${totalInterval--}`, (err, data) => {
            console.log(data);
        });
        // console.log(width, height);
        if(totalInterval < 0){
            clearInterval(running);
        }
    }, 1000);

}

app();
