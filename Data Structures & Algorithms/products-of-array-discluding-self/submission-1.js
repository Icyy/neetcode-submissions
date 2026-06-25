class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let newArr = []
        for(let i=0; i<nums.length;i++){
            let prod = 1;
            for(let j=0; j<nums.length;j++){
                if(i==j) continue 

                prod = prod * nums[j]

            }
            newArr.push(prod)
        }
        return newArr
    }
}
