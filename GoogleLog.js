const { DecoratedLog } = require("./DecoratedLog.js");
const { Dictionary } = require("./Dictionary.js");
const { JsLog } = require("./JsLog.js");

/**
 * @inheritDoc
 */
class GoogleLog extends DecoratedLog {
    constructor(origin = new JsLog) {
        const dict = (new Dictionary)
            .withEntries({
                'default': 'DEFAULT',
                'debug': 'DEBUG',
                'info': 'INFO',
                'notice': 'NOTICE',
                'warn': 'WARNING',
                'error': 'ERROR',
                'critical': 'CRITICAL',
                'alert': 'ALERT',
                'emergency': 'EMERGENCY',
            })
            .withDefaultVal('INFO');
        super(
            origin.newWithJsObj({
                severity: dict.valByKeyOrDefault( origin.level() )
            })
        );
    }
}

module.exports = {GoogleLog};