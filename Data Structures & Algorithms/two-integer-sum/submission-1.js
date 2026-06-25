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
                return [i,hMap.get(fNum)]
            }
            hMap.set(nums[i],i)
        }
    }
}
