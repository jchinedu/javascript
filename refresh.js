function find_the_largest_word_in_a_sentence(sentence) {
   let word = "";
   let largestWord = "";

   for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            if(largestWord.length > word.length){
                word = largestWord;
            }
            largestWord = "";
       } 
       else{
        largestWord += sentence[i];
       }

    }
    if(word.length > largestWord.length){
        largestWord = word;
    }
    return largestWord
}

//console.log(find_the_largest_word_in_a_sentence("ade is going to semicolon"));


function find_the_smallest_number_whose_digits_multiply_to_given_product(number) {
    let result = 0;
    let output = "";

    for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        result = i * j;
        if (result == number){
            let VaLUE1 = i.toString();
            let VALUE2 = j.toString();
            output = VALUE2 + VaLUE1;
            break; 
        }
    }
}
  return output

     
    
}
//console.log(find_the_smallest_number_whose_digits_multiply_to_given_product(36))


function find_the_Armstrong(number){
    let total = number
    let numberlength = number.toString().length

    let result = 0;
    for(let i = 0; i < numberlength; i++){
      let digits = number % 10;
       number = Math.floor(number / 10);
       let armstrong = Math.pow(digits, numberlength)
       result += armstrong;
    
    
}
if(total === result ) return true
return false
}

console.log(find_the_Armstrong(153));

