//  // All...
// // http://rosalind.info/problems/dna/
// // http://rosalind.info/problems/rna/
// // http://rosalind.info/problems/revc/
// // http://rosalind.info/problems/hamm/
// // One...
// // http://rosalind.info/problems/subs/
// // http://rosalind.info/problems/prot/
// // http://rosalind.info/problems/gc/
// const DNA_STRING_FOR_dna = "CGGTCGGTGAGCGGCCGAGCGTTCCAAATATCAAAGCTGATACGCGCGTAAAGTCGTGCATCAGCAAAAAGGTTAAGTGAAAGCATCCCACACTACTAGGCGCCCTCTCCCGCTTCGTTGACAACTACCTCCGTAGGCGTTAGGGCAACCATAAAAGGTACCTATTTTATTTTACTCTCTGTCCATCCTGATTACAAATTACAATTGGACGTTGTAGGCGGCCTTTAAATGAGAATTCAACTCTGTCCCCCCCCAATCATCAAAGGGTATGCGGACACTTACGTGGGTAGAAAATTAATCTCTCGAATGACGAGAAATGAGCGATATCGTCGTTCACACTATTGACGCTCGTGAGTATGCGTCTCTACCGGCTAGCTCATAACTTAGTGGGTGTACTGGATCACTGACTTTTATAATAAGCATCCCGCCAACCAAGGATAGTGCAAGTGAGCAAGTCCCTTATAATGATAAGCCCAAACATTAGTATATTTTATGCTAACGGAACCGCGAAGCGGAGAGGCAGAACGTTATTGGCCTTCACCCAACTAAAGGCGCGAGAAATGAATCAGTAGATCGAAGCATCTGTGCGTCGGATCCCGGCGAGTATCAACTCCAGACCAAGTACCTGTAAACGAGGCTTTTTTGCACGTAAGCACCGTGTGAGGTGGGACCGGTCGGTGTTTCAGGGGTGCTGGTGTATCACGGCTGTGCGATTTCAGGTCATTGCGCCTTTTCTACGATTTGTTCTAGCCTAGGAATAGAAGTGCAAAAGACTGAGTGCGAGAGGTGTACTATGTTATGATCGGTGGTATGAAGGTAAGCCCATAGGCAGCTCTGGCCCCAGCGCGCAAGTCCTTTCCAGGTTAATGAGGTTTACATGCTCCTTGGCGACTCGATAGACCCCGTACCCACGGAACCGCCACGGCTCGTCCTCCAACGGACATTAATTCATGTTGAGACCAGAACGATGT";
// const DNA_STRING_FOR_rna = "GATGGAACTTGACTACGTAAATT" ;
// const DNA_STRING_FOR_revc = "AAAACCCGGT";
// const DNA_STRING_1_FOR_hamm = "GAGCCTACTAACGGGAT";
// const DNA_STRING_2_FOR_hamm = "CATCGTAATGACGGCCT";
// const DNA_STRING_FOR_subs = "GATATATGCATATACTT";
// const DNA_SUBSTRING_FOR_subs = "ATAT";
// const RNA_STRING_FOR_prot = "AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA";

// function problem_dna() {
//   // this line is actually the solution to the problem
//   let counts = nucleotideCountsOf(DNA_STRING_FOR_dna);
//   // this is all drawing code...
//   drawDNAString(DNA_STRING_FOR_dna,0,0,width);
//   drawCounts(counts);
//   pieChart(width/2, height/2, width/4, counts);
// }


// function problem_rna() {  
//   //make dna line print above rna and adjust to window
//   adjustTextSizeToWidth(DNA_STRING_FOR_rna,width);
//   fill('lavender');
//   text('DNA:',0,0,width);

//   fill('linen')
//   //Using exisiting function from starter code to visualize the dna and rna
//   drawDNAString(DNA_STRING_FOR_rna,0,height/3,width);
//   text(DNA_STRING_FOR_rna,0,height/4)
//   //making headings to identify dna and rna

//    text("RNA:",0,height/1.75);

//   let rna = rnaTranscription(DNA_STRING_FOR_rna);
//   // highlight changed nucleotides
//   // turn all U's purple, found in drawingCode
//   drawDNAString(rna,0,height/1.25,width);
//   printRNAStringWithRedUrasil(rna,0,height/1.5);
// }

// function problem_revc() {
//   //Adjusting dna to the window width and using Mr. Oswald's function to draw out the dna
//   // adjustTextSizeToWidth(DNA_STRING_FOR_revc,width);
//   text(DNA_STRING_FOR_revc,0,height/4,width);
//   drawDNAString(DNA_STRING_1_FOR_hamm,0,height/3,width);
//   text(DNA_STRING_FOR_revc, 0, height/4)
//   text("DNA:",0,height/8);
//   text("Reverse Complement:",0, height/1.75);
//   //convert into an array so I can reverse the string, using the complement string defined in solutionCode
//   let str = Array.from(dnaRevComplement(DNA_STRING_FOR_revc)).reverse().join('');
//   drawDNAString(str,0,height/1.5,width);
//   //Need to use .join arry to remove commas
//   text(str, 0, height/1.5)

// }

// function problem_hamm() {
//   //For display, adjusting dna to the window width and using Mr. Oswald's function to draw out the dna
//   drawDNAString(DNA_STRING_1_FOR_hamm,0,0,width);
//   adjustTextSizeToWidth(DNA_STRING_1_FOR_hamm,width);
//   text(DNA_STRING_1_FOR_hamm,0,height/4);
  
//   drawDNAString(DNA_STRING_2_FOR_hamm,0,height/2.5,width);
//   adjustTextSizeToWidth(DNA_STRING_2_FOR_hamm,width);
//   text(DNA_STRING_2_FOR_hamm,0,height/2.75);
//   text("Hamming Distance:", 0,height/1.5)
  
//   //function goes through the two strings and when they are not equal adds a value to get Hamming value
//   const dna1 = DNA_STRING_1_FOR_hamm;
//   const dna2 = DNA_STRING_2_FOR_hamm;
//   const hammdistance = (dna1 = '', dna2 = '') => { 
//     if (dna1.length !== dna2.length)
//       return 0;
//   }
//   let dist = 0
//     for (let i = 0; i < dna1.length; i += 1) {
//     if (dna1[i] !== dna2[i]) {
//         dist += 1;
//       }
//     }
//     text (dist, 0,height/1.25)
  
// }

// function problem_subs() {
// //stylistic headings:
// text("DNA string:", 0, height/8)
// text("DNA substring:", 0, height/2.55)
// text("Substring location:", 0, height/1.45)
// fill('plum')
// text(DNA_STRING_FOR_subs, 0, height/3.75)
// text(DNA_SUBSTRING_FOR_subs, 0, height/1.75)

// //Use IndexOf to find first location of substring
// let string = DNA_STRING_FOR_subs
// let substring = DNA_SUBSTRING_FOR_subs
// let startIndex = -1;
// let indices = [];
// //need to use "while" and +1 to find subsequent positions of the substring
// while (string.indexOf(substring, startIndex + 1) > -1) {
//   startIndex = string.indexOf(substring,
//   startIndex + 1);
//   indices.push(startIndex+1);
//   }
//   text(indices.concat(), 0, height/1.15);
// }


// function problem_prot() {

// }

// function problem_gc() {

// }




//   // All...
// http://rosalind.info/problems/dna/
// http://rosalind.info/problems/rna/
// http://rosalind.info/problems/revc/
// http://rosalind.info/problems/hamm/
// One...
// http://rosalind.info/problems/subs/
// http://rosalind.info/problems/prot/
// http://rosalind.info/problems/gc/
const DNA_STRING_FOR_dna = "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC";
const DNA_STRING_FOR_rna = "GATGGAACTTGACTACGTAAATT" ;
const DNA_STRING_FOR_revc = "AAAACCCGGT";
const DNA_STRING_1_FOR_hamm = "GAGCCTACTAACGGGAT";
const DNA_STRING_2_FOR_hamm = "CATCGTAATGACGGCCT";
const DNA_STRING_FOR_subs = "GATATATGCATATACTT";
const DNA_SUBSTRING_FOR_subs = "ATAT";
const RNA_STRING_FOR_prot = "AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA";

function problem_dna() {
  let counts = nucleotideCountsOf(DNA_STRING_FOR_dna);
  drawDNAString(DNA_STRING_FOR_dna,0,0,width);
  drawCounts(counts);
  pieChart(width/2, height/2, width/4, counts);
}


function problem_rna() {
  console.log(DNA_STRING_FOR_rna.replaceAll('T', 'U'));
  drawDNAString(DNA_STRING_FOR_rna,0,width/3,height);
  fill(0);
  text("RNA:", width/3, height/4);
  
 text(DNA_STRING_FOR_rna, 0, height/3); 
  let rna = rnaTranscription(DNA_STRING_FOR_rna);
  //highlight changed nucleotides
// turn all U's purple, found in drawingCode
//drawDNAString(rna,0,height/1.25,width);
//   printRNAStringWithRedUrasil(rna,0,height/1.5);
// }
  //drawDNAString(rna,0,height/1.25,width);

  
}
//function already a part of js! #replaceAll

function problem_revc() {
 drawDNAString(DNA_STRING_1_FOR_hamm,0,height/3,width);
  text("DNA:",0,height/8);
   text(DNA_STRING_FOR_revc, 0, height/5)
 
  text("Reverse Complement:",0, height/1.75);
   let str = Array.from(dnaRevComplement(DNA_STRING_FOR_revc)).reverse().join('');
  drawDNAString(str,0,height/1.5,width);
  text(str, 0, height/1.5)
  //const revComplement = Array.from
  //(DNA_STRING_FOR_revc).filter
    
   

}

function problem_hamm() {
  adjustTextSizeToWidth(DNA_STRING_1_FOR_hamm,width);
  text(DNA_STRING_1_FOR_hamm,0,height/4);
  
  drawDNAString(DNA_STRING_2_FOR_hamm,0,height/2.5,width);
  adjustTextSizeToWidth(DNA_STRING_2_FOR_hamm,width);
  //text(DNA_STRING_2_FOR_hamm,0,height/2.75);
  text("Hamming Distance:", 0,height/1.5)



  const hammingDistance = Array.from(DNA_STRING_2_FOR_hamm).reduce((distance,current,i) => {
    if( DNA_STRING_1_FOR_hamm.charAt(i) !== current ) {
      return distance + 1;
    } else {
      return distance;
    }
     
  }, 0);
  
}

//filter
//map applies function in array and runs 

function problem_subs() {
text(DNA_STRING_FOR_subs, 0, height/3.5)
text(DNA_SUBSTRING_FOR_subs, 0, height/1.75)
  
  fill('plum')
  text("Substring location:", 0, height/1.5)

  text("DNA string:", 0, height/8)
text("DNA substring:", 0, height/2.5)

  let string = DNA_STRING_FOR_subs
  let substring = DNA_SUBSTRING_FOR_subs
  let startIndex = -1;
  let indices = [];
while (string.indexOf(substring, startIndex + 1) > -1) {
  startIndex = string.indexOf(substring,
  startIndex + 1);
  indices.push(startIndex+1);
  }
    fill('HoneyDew')
 text(indices.concat(), 0, height/1.15);
}

function problem_prot() {

}

function problem_gc() {

}