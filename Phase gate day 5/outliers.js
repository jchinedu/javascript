function findOutlier(integers){
    let evens = integers.filter(num => num % 2 === 0);
    let odds = integers.filter(num => num % 2 !== 0);
    
    return evens.length === 1 ? evens[0] : odds[0];
}