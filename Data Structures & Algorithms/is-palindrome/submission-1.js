class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        const cleanStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let i = 0 
        let j = cleanStr.length-1

        while(i<j){
            if(cleanStr[i]!==cleanStr[j]){
                return false
            }
            i++;
            j--
        }
        return true


    }
}
