//callback
/*
function SJITclg(msg, abc){
    console.log(msg);
    abc();
}

function callBackSJIT(){
    console.log("Welcome Back");
}

SJITclg("Welcome to SJIT", callBackSJIT);
*/

//Typical Example

function formSubmission(msg, cbFn){
    if(cbFn()){
        console.log(msg);
    }else{
        console.log("Form Submission Unsuccessful")
    }
}
function formValidation(){
    console.log("Form Validation is Successful");
    return true
}
formSubmission("Form Submitted Succeccfully", formValidation);
