const { JsLog } = require("./JsLog.js");

/**
 * @inheritDoc
 */
class LogWithDate extends JsLog {
    constructor(jsObj = {}) {
        super(jsObj);
    }
    asJsObj() {
        return Object.assign(
            {
                date: ( new Date ).toLocaleString()
            },
            super.asJsObj()
        )
    }
}

module.exports = {LogWithDate};