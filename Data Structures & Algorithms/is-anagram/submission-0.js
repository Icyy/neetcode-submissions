class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sortedOne = s.split('').sort().join('')
        const sortedTwo = t.split('').sort().join('')
        if(sortedOne===sortedTwo){
            return true 
        }
        return false
    }
}
