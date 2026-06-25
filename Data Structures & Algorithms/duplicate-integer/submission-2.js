class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const nMap = new Set(nums)
        if(nMap.size<nums.length){
            return true 
        }
        return false

    }
}
