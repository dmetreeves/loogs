const { LogWithLevel } = require("./LogWithLevel.js");
const { LogWithDate } = require("./LogWithDate.js");
const { JsLog } = require("./JsLog.js");

/**
 * @implements Log
 */
class BaseLog extends JsLog {
    /**
     * @param {Object} jsObj
     */
    constructor(jsObj = {}) {
        super(
            (
                LogWithDate.newFromLog(
                    LogWithLevel.newFromJsObj(jsObj)
                )
            ).asJsObj()
        );
    }
}

module.exports = {BaseLog};