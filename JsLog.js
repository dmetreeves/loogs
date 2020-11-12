/**
 * @implements Log
 */
class JsLog {
    /**
     * @property {Object}
     */
    #jsObj;

    /**
     * @param {Object} jsObj
     */
    constructor(jsObj = {}) {
        this.#jsObj = jsObj;
    }
    /**
     * @param {Object} jsObj
     * @returns JsLog
     */
    static newFromJsObj(jsObj = {}) {
        return new this(jsObj);
    }
    /**
     * @inheritDoc
     */
    static newFromLog(log = new this) {
        return new this( log.asJsObj() );
    }
    /**
     * @inheritDoc
     */
    newWithJsObj(jsObj = {}) {
        return new this.constructor(
            Object.assign(jsObj, this.#jsObj)
        );
    }

    /**
     * @inheritDoc
     */
    level() {
        return this.#jsObj.level;
    }

    /**
     * @inheritDoc
     */
    asJsObj() {
        return this.#jsObj;
    }

    /**
     * @inheritDoc
     */
    asString() {
        return this.#jsObj.toString();
    }
}

module.exports = {JsLog};