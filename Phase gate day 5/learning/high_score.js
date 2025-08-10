function highScoringWord(x){
  const words = x.split(' ');
  const scores = words.map(word => {
    return word.split('').reduce((acc, char) => acc + (char.charCodeAt(0) - 96), 0);
  });
  
  const maxScore = Math.max(...scores);
  return words[scores.indexOf(maxScore)];
}