
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