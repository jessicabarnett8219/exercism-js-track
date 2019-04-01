// Given a DNA strand, return its RNA complement (per RNA transcription).
// Both DNA and RNA strands are a sequence of nucleotides.
// The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).
// The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U)
// Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:
// G -> C
// C -> G
// T -> A
// A -> U
const transform = (nucleotide) => {
    const rnaKey = {
        G: "C",
        C: "G",
        T: "A",
        A: "U"
    }
    if (rnaKey[nucleotide]) {
        return rnaKey[nucleotide]
    }
}

const toRna = (string) => {
    const rna = []
    string = string.split("")
    string.forEach(nucleotide => {
        let rnaNucleotide = transform(nucleotide)
        rna.push(rnaNucleotide)
    })
    return rna.join("")
}

export {toRna}