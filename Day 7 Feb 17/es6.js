//1. variables - refer declarationsAndDatatypes.

//2. arrow Function

/*
var testArrowFunction = () => {
    console.log("This is test arrow Function");
}
testArrowFunction()
*/

//3. Scoping
/*
var a = 10
console.log(a);
//Scoping Starts 
{
    var a = 20
    console.log(a);
    
    let b = 30
    console.log(b);

    let c = 40
    console.log(c);

    var e = 50
    console.log(e);

    a = 30;
    console.log(a);
}
console.log(a);
console.log(e);
*/

//4. Ternary Operator

/*
a = 11
console.log((a%2) ? "Odd" : "Even") //in this a = 11 it returns 1 as output the it'll be consider as true; if a = 10 -> returns 0 consider as false
*/

// 5.  Spread Operator(...)
/*
stud1Yr = ["user1", "user2", "user3"]
stud2Yr = ["user4", "user5", "user6"]
stud3Yr = ["user7", "user8", "user9"]
stud4Yr = ["user10", "user11", "user12"]
studDB = [...stud1Yr, ...stud2Yr, ...stud3Yr, ...stud4Yr]
// console.log(studDB)
// alumniDB = []
*/

//6. Rest Operator(...)

/*
function studentDB(...studDataBase){
    console.log(studDataBase);
}
studentDB(studDB)
*/

//7. Destructuring Operator[    ]
/*
var arr = [10,20,30,40]
var[a, b, c, d] = arr
console.log(a);
console.log(b);
console.log(c);
console.log(d);
*/

//8. Varibale Hoisting - Hositing Important Concept in Interview

/*
console.log(a)
let a = 10
*/

//9. Fuunctional Hoisting
/*
funHoisting()
function funHoisting(){
    console.log("Checking");
}
*/

// 9. Class and Objects

class classEg{
    a = 10;
    testFn(){
        console.log(("Hello"));
        return "Sample return"; // if there is no return statement is given it automatically return as undefined;
    }
}

obj = new classEg()
console.log(new classEg().testFn())
//the function inside the class can't be accessed directly - without creating an object(constructor) using the new keyword
