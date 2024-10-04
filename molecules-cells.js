const dnaStrands = {'G':'C','C':'G', 'T':'A', 'A':'U'}
const rnaStrands = {'C':'G', 'G':'C', 'A':'T', 'U':'A'}

const converter = function(strand, strands){
    var result = ''
    for(let i = 0; i < strand.length;i++){
        if(strands[strand[i]] != undefined){
            result += strands[strand[i]]
        }
    }
    return result
}
const RNA = function(dnaStrand){
    return converter(dnaStrand, dnaStrands)
}

const DNA = function(rnaStrand){
    return converter(rnaStrand, rnaStrands)
}
