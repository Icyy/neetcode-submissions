class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hmap = {}
        for(const num of nums){
            hmap[num] = (hmap[num] || 0) + 1
        }

        return Object.entries(hmap).sort((a,b)=>b[1]-a[1]).slice(0,k).map((val)=>Number(val[0]))
        
    }
}
