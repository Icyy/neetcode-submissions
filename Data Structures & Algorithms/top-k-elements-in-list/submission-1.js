class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       const map = new Map()
       const bucket = []
        const res= []
       for(let i=0; i<nums.length;i++){
        map.set(nums[i], (map.get(nums[i])||0)+1)
       }

       for(let [num, freq] of map.entries()){
        if(!bucket[freq]){
            bucket[freq] = new Set().add(num)
        }else{
            bucket[freq].add(num)
        }
       }

       for(let i = bucket.length-1; i>=0; i--){
            if(bucket[i]){
                for(let num of bucket[i]){
                    res.push(num)
                    if(res.length === k) return res
                }
            }
       }
        return res
    }
}
