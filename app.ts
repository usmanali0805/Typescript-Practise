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

// class bottlemaker {
//     constructor(public name : string , public price : number ){}
// }

// let b1 = new  bottlemaker("Aquafina", 1235465);
// let b2 = new  bottlemaker("Nestle", 250);



// Access Modifier (public , private , protected)
 
// private
// class students {
//     constructor(public student: string , private rollno:string|number){

//     }
//     changeRollno(){
//         this.rollno = 1234 
//     }
// }

// let std1 = new students("USman", 234)
// // We can't change here like this but we can change in side the class
// //std1.rollno = 1233
// console.log(std1)

// protected

// class students{
//     constructor(public name:string , protected rollno?:string|number){}
// }

// class class1 extends students{
//     onChange(){
//         this.rollno = 124
//     }
// }

// let cls1 = new class1("Usman", 456)
// console.log(cls1)


// Getter && Setter

// class User {
//     constructor(public name:string , public age :number){
//     }
//      getname(){
//         return this.name
//      }

//      setname(value:string){
//         return this.name = value;
//      }
// }

// let u1 = new User("tabish" , 21)
// console.log(u1.setname("Usman"))



// Static Member

// class react{
//     static version = 1.0;
//     static getRandomNumber(){
//         console.log(Math.random())
//     }
// }

// let ver = new react()



// Abstract CLasses and Methods

// class Payment{
//     constructor(protected amount:number , protected accountNo:string){}
// }

// class EasyPaisa extends Payment{
    
// }


// Function and its Types

// function abcd(name:string):void{
//     console.log(name)
// }

// abcd("Usman")


function abcdf(name:string , cb:(value:string)=>void):void{
    cb(name)
}

abcdf("name" , (value:string)=>{
    console.log(value)
})

