class Logger{
    constructor(){
        this.id = Date.now();
    }

    logMsg(msg, answer){
        //console.log({result:`Calculation ID:${msg} and result:${answer}`})
        console.log("Calculation ID: " + msg + " and result: " + answer);
    }
}

module.exports= Logger 