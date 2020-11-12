const { DecoratedLog } = require("./DecoratedLog.js");
const { JsLog } = require("./JsLog.js");

/**
 * @inheritDoc
 */
class JsonLog extends DecoratedLog {
    constructor(origin = new JsLog) {
        super(origin);
    }
    asString() {
        return JSON.stringify( super.asJsObj() );
    }
}

module.exports = {JsonLog};