const { LogLevel } = require("./LogLevel.js");
const { JsLog } = require("./JsLog.js");

/**
 * @inheritDoc
 */
class LogWithLevel extends JsLog {
    #level;
    constructor(jsObj = {}) {
        super(jsObj);
        this.#level = new LogLevel( jsObj['level'] );
    }
    asJsObj() {
        return Object.assign(
            this.#level.asJsObj(),
            super.asJsObj()
        )
    }
}

module.exports = {LogWithLevel};