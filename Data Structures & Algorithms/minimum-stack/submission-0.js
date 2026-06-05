class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let currentMin = this.stack.length ===0?val: Math.min(val,this.getMin());
        this.stack.push([val, currentMin]);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if(this.stack.length > 0) {
            return this.stack[this.stack.length -1][0];
        }else {
            return 0
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        if(this.stack.length>0) {
            return this.stack[this.stack.length -1][1];
        }
        return 0;
    }
}
