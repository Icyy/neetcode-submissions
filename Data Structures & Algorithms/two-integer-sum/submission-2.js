class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hMap = new Map()
        for(let i=0;i<nums.length;i++){
            const fNum = target - nums[i]
            if(hMap.has(fNum)){
                return [hMap.get(fNum),i]
            }
            hMap.set(nums[i],i)
        }
    }
}
