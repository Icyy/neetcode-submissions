class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let counts = {}
        let countt = {}
        for(let i=0; i<s.length; i++){
            counts[s[i]] = (counts[s[i]]||0)+1
            countt[t[i]] = (countt[t[i]]||0)+1
        }
        for(let key in counts){
            if(counts[key]!==countt[key]){
                return false
            }
        }
        return true 

    }
}
