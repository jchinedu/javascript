function Bug_Tracking_App(number){
   return number.filter(number => number >=1 && number <=5)
}

console.log(Bug_Tracking_App([1,2,3,4,5,6,7,8,9,0]))