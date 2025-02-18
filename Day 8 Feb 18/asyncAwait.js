async function asAw() {
    var a=15
    setTimeout(function(){
        console.log("Hello World");
    }, 2000)
    console.log(await a);
}
asAw()

//await should be inside the async function.