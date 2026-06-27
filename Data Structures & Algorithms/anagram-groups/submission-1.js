class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sorted = strs.map((str)=>str.split('').sort().join(''))
        const obj = {}
        for(let i=0; i<sorted.length;i++){
            if(!obj[sorted[i]]){
                obj[sorted[i]] = [strs[i]]
            }else{
                obj[sorted[i]].push(strs[i])
            }
        }
        return Object.values(obj)
    }
}
