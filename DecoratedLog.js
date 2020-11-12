const { JsLog } = require("./JsLog.js");

/**
 * @implements Log
 */
class DecoratedLog {
    /**
     * @property {Log} #origin - Декорируемый объект лог
     */
    #origin;

    /**
     *
     * @param {Log} origin
     */
    constructor(origin = new JsLog) {
        this.#origin = origin;
    }
    /**
     * @inheritDoc
     */
    static newFromLog(log = new JsLog) {
        return new this(log);
    }
    /**
     * @inheritDoc
     */
    newWithJsObj(jsObj = {}) {
        return new this.constructor(
            this.#origin.newWithJsObj(jsObj)
        );
    }
    /**
     * @inheritDoc
     */
    level() {
        return this.#origin.level();
    }
    /**
     * @inheritDoc
     */
    asJsObj() {
        return this.#origin.asJsObj();
    }
    /**
     * @inheritDoc
     */
    asString() {
        return this.#origin.asString();
    }
}

module.exports = {DecoratedLog};