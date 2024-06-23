/* kis tarah se data ko memory me rakkha aur access kia jata hai uss basic pe
data is divide into two categories: Primitive and Non-Primitive

PRIMITVE: 7 types: String, Number, Boolean , null, undefined, Symbol, BigInt

Reference/ Non-Primitive: arrays, objects, functions
*/
//array:
const heroes=["ironman","spiderman","hulk","thor","captain america","black widow"]

//object :
let myObj={
    name:"dharwee",
    age:21,
} //careful with the syntax!

//fucntions:

const myFunction=function(){
    console.log("hello ji")
}
myFunction()

// Note: JavaScript is a dynamically typed language.
// Variables can be declared without specifying their type, and their type is determined at runtime.
// The type of a variable can change during the execution of the program.


//we use typeof to find out the type of the data type

 console.log(typeof heroes )

 /* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/