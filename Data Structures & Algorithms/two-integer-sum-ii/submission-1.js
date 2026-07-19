class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length-1
        while(l<r){
            let currentSum = numbers[r] + numbers[l]
            if(currentSum>target) r--
            if(currentSum<target)l++
            if(currentSum == target) return[l+1,r+1]
        }
        return []
    }
}
