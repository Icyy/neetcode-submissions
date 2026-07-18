class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let estrs = ""
        for(let str of strs){
            estrs = estrs + str.length+'#'+str
        }
        return estrs
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0;
        while(i<str.length){
            let j = i;
            while(str[j]!=='#'){
                j++
            }
            let length = parseInt(str.substring(i,j),10)
            i = j+1
            const s = str.substring(i,length+i)
            res.push(s)
            i = i + length
        }
        return res
    }
}
