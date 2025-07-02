function Bug_Tracking_App(){
    let list = [0,1,2,3,4,5,6,7,8,9,10]
    let cleanse = [];
    for(let index = 0; index < list.length; index++){
        if(list[index]>0 && list[index] <=5){
            cleanse.push(list[index])
        }
    }
    return cleanse;
    
}

console.log(Bug_Tracking_App())