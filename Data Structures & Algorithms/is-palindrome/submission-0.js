class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
          let cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        
        let left = 0;
        let right = cleanStr.length-1;
        while(left <= right) {
            console.log(cleanStr[left],cleanStr[right]);
            if(cleanStr[left] !== cleanStr[right]) return false;
            left++;
            right--;
        }
        
        
        return true
    }
}
