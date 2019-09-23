/**
 * max排序
 * @param {*} arr 
 * 耗时：760ms
 */
function maxSort(arr) {
    let result = [...arr];
    for(let i=0,len=result.length; i< len; i++) {
       let minV = Math.min(...result.slice(i))
       let pos = result.indexOf(minV,i)
       result.splice(pos, 1)
       result.unshift(minV)
    }
    return result.reverse()
}
