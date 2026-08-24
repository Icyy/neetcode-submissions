class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       const sset = new Set(nums)
       let maxStreak = 0
       for(let num of sset){
        if(sset.has(num-1))continue
        let currStreak = 1
        while(sset.has(num+1)){
            currStreak++
            num++
        }
        maxStreak = Math.max(maxStreak,currStreak)
       }
       return maxStreak
    }
}
