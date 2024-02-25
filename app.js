const figlet = require("figlet");
const tty = require("node:tty");

function app() {
    //  capture the time that is entered in to kstah
    const countdown = process.argv[2];
    const message = process.argv[3];
    console.log(countdown);
    let totalInterval = parseInt(countdown * 60);

    const running = setInterval(() => {
        console.clear();
        const ttyProcess = process.stdout;
        const columns = ttyProcess.columns;
        const rows = ttyProcess.rows;

        // We get a temp to get the total columns and rows needs for the x and y buffer
        const figletOut = figlet.textSync(`${0}${message}: ${totalInterval--}`);
        const derivedWidth = figletOut.indexOf('\n');
        const derivedRows = figletOut.split('\n').length;
        const x = Math.floor(Math.random() * (columns - derivedWidth));
        const y = Math.floor(Math.random() * (rows - derivedRows));
        let yBuffer = createPadding('\n', y);
        let xBuffer = createPadding(" ", x);
        figlet.text(`${xBuffer}${message}: ${totalInterval--}`, (err, data) => {
            ttyProcess.write(yBuffer + data);
        });
        if(totalInterval < 0){
            clearInterval(running);
        }
    }, 1000);

}

function createPadding(name, count){
    let result = "";
    for(let i = 0; i < count; i++){
        result += name;
    }
    return result;
}

app();
