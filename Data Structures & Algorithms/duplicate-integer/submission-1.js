class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const nMap = new Set()
        for(let i=0; i<nums.length;i++){
            if(nMap.has(nums[i])){
                return true 
            }
            nMap.add(nums[i])
        }
        return false
    }
}
