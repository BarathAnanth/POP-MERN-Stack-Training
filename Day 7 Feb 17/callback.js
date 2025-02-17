//callback

function SJITclg(msg, abc){
    console.log(msg);
    abc();
}

function callBackSJIT(){
    console.log("Welcome Back");
}

SJITclg("Welcome to SJIT", callBackSJIT);