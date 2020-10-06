module.exports = function check(expr, bracketsConfig){
    const holder = []
    const openBrackets = ['(','{','[']
    const closedBrackets = [')','}',']']
    for (let letter of (expr + bracketsConfig.toString())) {
        if(openBrackets.includes(letter)){
            holder.push(letter)
        } else if(closedBrackets.includes(letter)){
            const openPair = openBrackets[closedBrackets.indexOf(letter)]
            if(holder[holder.length - 1] === openPair){
                holder.splice(-1,1)
            }else{
                holder.push(letter)
                break
            }
          }
    }
    return (holder.length === 0) // return true if length is 0, otherwise false
}
