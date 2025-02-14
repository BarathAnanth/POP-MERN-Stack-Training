//conditional Statement
//already known syntax and statements

//Looping Statement

//for in
array = [10,20,30,"abc", true, "hello", [10,20,30]]
obj = {
    name: "Barath",
    dept:"CSE",
    clg:"Tech",
    skills:["UIUX", "MERN", "DSA"]
}

for(i in array){
    console.log(i);
}

for(i in obj){
    console.log(i);
}

//for of
for(i of array){
    console.log(i);
}

for(i of Object.values(obj)){
    console.log(i);
}

//forEach

Object.values(obj).forEach((ele) => {
    console.log(ele)
});

Object.keys(obj).forEach((ele) => {
    console.log(ele)
});

Object.entries(obj).forEach((key, ele) => {
    console.log(key, ele)
});
