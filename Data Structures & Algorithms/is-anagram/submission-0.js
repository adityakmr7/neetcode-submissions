class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let map = new Map();

        for(let i = 0; i < s.length;i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);
        }

        let map2 = new Map();
        for(let i = 0 ; i < t.length;i++) {
            map2.set(t[i], (map2.get(t[i]) || 0) + 1);
        }

        for(let [key,val] of map) {
            const tValue = map2.get(key);
            if(tValue !== val) {
                return false;
            }
        }

    
        return true;
       
    }
}
