function nucleotideCountsOf(string) {
  return nucleotides.reduce( (counts,n) => {
    counts[n] = Array.from(string).filter( char => char === n).length
    return counts;
  }, {}) 
}

function rnaTranscription(string) {
  //just need to replace all Ts with Us to make rna
  return string.replaceAll('T', 'U');
}

function dnaRevComplement(string) {
  //learned in class I needed to add an intermediate variable so that the transformation into the complement isn't accidentally reversed again
  return string.replaceAll('A', 't').replaceAll('T', 'A').replaceAll('t', 'T');
  return string.replaceAll('C', 'c').replaceAll('G', 'C').replaceAll('c', 'G');

}
// function nucleotideCountsOf(string) {
//   return nucleotides.reduce( (counts,n) => {
//     counts[n] = Array.from(string).filter( char => char === n).length
//     return counts;
//   }, {}) 
// }