// Q1
var empty={};
console.log(empty);

// Q2
const object = {
    name:"Deniya",
    introduceYou: function() {
return ("Hello, my name is"+" "+this.name);
    }
};

console.log(object.introduceYou());

// Q3
var greetstudent={name:"Deniya"};
console.log("Hello "+greetstudent.name+" Welcome to the Coding School");

// Q4
const dot={
    name:"Deniya",
    age: 20,
    language:"javascript"
};
const target= dot.name;
console.log(target);

// Q5
var obj = { Name: "Joe" };
obj.email = "john@example.com";
console.log(obj.email)

// Q6
var f={name:"Deniya", age:"20"};
const propToBeDeleted ="age";
delete f[propToBeDeleted];
console.log(propToBeDeleted);

// Q7
var a={address:"Passaiyoor"};
var b=a.hasOwnProperty("address");
console.log(b);

// Q8
var d={student:"Deniya"};
var e={ course:"IT"};
let merge= {
    ...d,
    ...e
};
console.log(merge);

// Q9
var c={address:"Passaiyoor", };


// Q10
var book={
    title:"Runner",
    author:"Edwinraj",
    year:2023
};
const myJSON = JSON.stringify(book);
console.log(myJSON);

// Q11
var students=["Deniya",20,29.03];
console.log(students);



// 2. object name=person property name and age craete  funtion into it called introduceYou eith Hello my name  is+person.name
// 9. check address if it true with console Address is there
// or false Address not found 