class Dictionary {
    /**
     * @property {Object} #keysValsJsObj
     */
    #keysValsJsObj = {};
    /**
     * @property {*} #defaultVal
     */
    #defaultVal;

    /**
     * @param {Object} keysValsJsObj
     * @param {*} defaultVal
     */
    constructor(keysValsJsObj = {}, defaultVal = undefined) {
        this.#keysValsJsObj = keysValsJsObj;
        this.#defaultVal = defaultVal;
    }

    /**
     * @param {String|Number} key
     * @param {*} val
     * @returns {Dictionary}
     */
    withEntry(key, val) {
        return new this.constructor(
            Object.assign(
                { [key]: val },
                this.#keysValsJsObj
            ),
            this.#defaultVal
        );
    }

    /**
     * @param {Object} jsObj
     * @returns {Dictionary}
     */
    withEntries(jsObj) {
        return new this.constructor(jsObj, this.#defaultVal);
    }

    /**
     * @param {*} val
     * @returns {Dictionary}
     */
    withDefaultVal(val) {
        return new this.constructor(this.#keysValsJsObj, val);
    }

    /**
     * @param {String|Number} key
     * @returns {*}
     */
    valByKeyOrDefault(key) {
        return this.#keysValsJsObj[key] || this.#defaultVal;
    }

    /**
     *
     * @returns {Object}
     */
    entries() {
        return this.#keysValsJsObj;
    }
}

module.exports = {Dictionary};