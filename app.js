// ================== ARROW FUNCTION ==============
// function hello()
// {
//     console.log("how are you !");
// }
// hello();
// ================================================
// let hello =function hello()
// {
//     console.log("how are you !");
// }
// hello();
// ================================================
// let ram =()=>console.log("Hello");    <=  arrow function
// let ram=(name,age)=>`what is your ${name} and ${age}`;
// console.log(ram("Deepak","21"));
// =================================================

// rest operator
// function solve(name,...args)
// {
//     let sum=0;
//     for(let i in args)
//     {
//         sum+=args[i];
//     }
//     console.log(sum);
// }
// solve("Deepak",1,2,3,4,5);

//spread operator
// function solve(name,...args)  //rest opearator
// {
//     let sum=0;
//     for(let i in args)
//     {
//         sum+=args[i];
//     }
//     console.log(sum);
// }
// let a=[10,20,30,40,50];
// solve("Deepak",...a);   //spread opeartor

// ========================================================
//object destructring 
// let a=[10,20,30];
// let [name,age,user]=a;
// console.log(name);
// console.log(age);

let user={
    a:"Deepak",
    b:25,
    c:"Delhi"
};
let{a,b,c}=user;
console.log(a,b,c);
