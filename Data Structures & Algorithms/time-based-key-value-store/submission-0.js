class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push({timestamp,value})
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) {
            return ""
        }
        const history = this.keyStore.get(key);
        let low = 0;
        let high = history.length -1;
        let result = "";
        while(low<= high) {
            let mid = Math.floor((low+ high)/2);
            if(history[mid].timestamp === timestamp) {
                return history[mid].value
            }else if(history[mid].timestamp <timestamp) {
                result = history[mid].value;
                low = mid+1
            }else {
                high = mid-1;
            }
        }
        return result;
    }
}
