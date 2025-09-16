/*let table="asad"
function outer(){
let table="window";
return function fun(){
    console.log(this.table);
}}
outer()();*/

//let arr=[1,2,3,4,2]
/*let obj={
    name: "asad"
}


console.log(Array.isArray(arr))
console.log(Array.isArray(obj))

console.log(Array.from("and"));
console.log(Array.of(1,2,3));*/

//arr.unshift(5);   //add start
//arr.shift();      //remove start

//arr.splice(1,2,7)         //add/remove at position

//console.log(arr.slice(1,3))

//console.log(arr.includes(4));

//console.log(arr.indexOf(1))

//console.log(arr.lastIndexOf(2))

//console.log(arr.find(x=>x>3))   //first match

//console.log(arr.findIndex(x=>x%2==0)) 

//const newarr= arr.map((value,index,arr)=>{
 //   return value*index;
//})

//const newarr=arr.filter((value,index,arr)=>{
//    return value%2===0;
//})
//arr.sort();
//arr.reverse();
//console.log(arr.join(""));
//console.log(newarr);

const arr = ["a", "b", "c", "d"];

const left = arr.reduce((acc, curr) => acc + curr,"");
console.log(left);