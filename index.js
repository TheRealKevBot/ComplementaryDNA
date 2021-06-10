//  In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
//  You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. 
//  DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// DNAStrand ("ATTGC") returns "TAACG"
// DNAStrand ("GTAT")  returns "CATA" 



function DNAStrand(dna){
    compStrand = []
    curStrand = dna.toLowerCase().split('')
    curStrand.forEach(sym => {
        sym === 'a' ? compStrand.push('t') : null
        sym === 't' ? compStrand.push('a') : null
        sym === 'c' ? compStrand.push('g') : null
        sym === 'g' ? compStrand.push('c') : null
    })
    return compStrand.join('').toUpperCase()
} 

console.log("TTTT, " + "String AAAA is " + DNAStrand("AAAA"));
console.log("TAACG, " + "String ATTGC is " + DNAStrand("ATTGC"));
console.log("CATA, " + "String GTAT is " + DNAStrand("GTAT"));
console.log("TAACG, " + "String ATTGC is " + DNAStrand("ATTGC"));