//greet();

//function greet(){
 //let reply = "hello"
  //return reply
// };




// const greet = function(){
//  let reply = "hello"
//   return reply
// }

// console.log(greet());
// function getEvenNumbers(array){
//   let newarray = [];
//   for(let index = 0; index < array.length; index++){
//     if(array[index] % 2 === 0){
//       newarray.push(array[index])
//     }
//   }
//   return newarray
// }


// module.exports = getEvenNumbers


function getEvenNumbers(array){
  return array.filter(num => num % 2 == 0)
}
const createCounter = function(param){
  let counter = 0;
  return {
    increment:()=>{
       counter++;
    },
    getcounter:()=>{
      return counter
    },
    decrement:()=>{
      counter--;
    },
    reset: ()=>{
      counter= 0;
    }
  }  

    
}

module.exports = {getEvenNumbers, createCounter}