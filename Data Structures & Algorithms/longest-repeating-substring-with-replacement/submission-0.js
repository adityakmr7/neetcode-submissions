class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const charCounts = {};

        let left = 0;
        let maxFreq = 0;
        let maxLen = 0;
        for(let right = 0; right < s.length;right++) {
            const char = s[right];
            charCounts[char] = (charCounts[char] || 0) +1;
            maxFreq = Math.max(maxFreq, charCounts[char]);

            while((right-left +1) - maxFreq > k) {
                charCounts[s[left]]--;
                left++;
            }
            maxLen = Math.max(maxLen,right-left +1);
        }
        return maxLen;
    }
}
