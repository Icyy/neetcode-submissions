class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;

        const nSet = new Set(nums)

        for(let num of nSet){
            if(!nSet.has(num-1)){
            let currentNum = num;
            let currentStreak = 1; 
            while(nSet.has(currentNum+1)){
                currentStreak++
                currentNum++
            }
            longest = Math.max(longest, currentStreak)
            }
        }
        return longest
    }
}
