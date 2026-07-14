class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hmap = new Map()
        for(let i=0; i<nums.length; i++ ){
            const diff = target - nums[i]
            if(hmap.has(diff)){
                return [hmap.get(diff), i]
            }
            hmap.set(nums[i], i)
        } 
    }
}
