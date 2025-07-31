// var a = 2
//  const hello = () => {
//    console.log("hello")
//  }

// const helloa = () => {
//   console.log("object")
// }

// function abcs():number | string{
//   return 23
// }

// abcs();


// Interface and extends
// interface User {
//   name:string;
//   email:string;
//   password:string
// }

// interface Admin  extends User {
//   Admin : boolean
// }

// function detail(obj:Admin){
// console.log( "name:"+ obj.name , "\n email:"+ obj.email , "\n password:"+  obj.password , "\nAdmin:"+ obj.Admin) 
// }

// detail({name:"Usman", email:"usman@mail" , password:"usmn" , Admin:true })

// Aliases
// type a = string| number;  

// function abcs (obj:a):void{
//   console.log(obj)
// }

// abcs("Usman")

// Intersection
// type User = {
//   name: string;
//   email: string;
// }

// type Admin = User & {
//  getDetail (User:string):void;
// }

// function abcs(obj: Admin){
//     console.log(obj)
// }



// Classes and object 

class bottlemaker {
    constructor(public name : string , public price : number ){}
}

let b1 = new  bottlemaker("Aquafina", 1235465);
let b2 = new  bottlemaker("Nestle", 250);