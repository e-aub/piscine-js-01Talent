const blockChain = function(data, prev){
    if (prev == undefined){
        prev = { index: 0, hash: '0' }
    }
    const block = {index: prev.index +1,
            hash : hashCode(prev.index +1 + prev.hash + JSON.stringify(data)),
            data : data,
            prev : prev,
    }
    block.chain = (data)=>{
        return blockChain(data, block)
     }

     return block
}