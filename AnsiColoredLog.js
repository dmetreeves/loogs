const { DecoratedLog } = require("./DecoratedLog.js");
const { JsLog } = require("./JsLog.js");

/**
 * @implements Log
 */
class AnsiColoredLog extends DecoratedLog {
    /**
     *
     * @type {{warn: number, error: number, info: number}}
     */
    #colorCodesPerLevels = { 'info': 96, 'error': 91, 'warn': 93 };

    /**
     * @param {Log} origin
     */
    constructor(origin = new JsLog) {
        super(origin);
    }
    /**
     * @inheritDoc
     */
    asString() {
        const code = this.#colorCodesPerLevels[ super.level() ];
        const str = super.asString();
        return `\x1b[${ code }m`+ // set color
            `${ str }`+ // print text
            `\x1b[0m`; // reset next symbols color
    }
}

module.exports = {AnsiColoredLog};