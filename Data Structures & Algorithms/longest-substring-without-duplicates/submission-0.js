class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let longestStr = 0
        let left = 0
        let right = 0
        const sset = new Set()

        while(right<s.length){
            let str = s[right]
            if(!sset.has(str)){
                sset.add(str)
                longestStr = Math.max(longestStr,sset.size)
                right++
            }else{
                sset.delete(s[left])
                left++
            }
        }
        return longestStr




    }
}
