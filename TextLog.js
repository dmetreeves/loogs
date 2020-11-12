const { DecoratedLog } = require("./DecoratedLog.js");
const { JsLog } = require("./JsLog.js");

/**
 * @inheritDoc
 */
class TextLog extends DecoratedLog {
    constructor(origin = new JsLog) {
        super(origin);
    }
    asString() {
        return '\n' + this.#recursiveFormatJsObjAsString( this.asJsObj() )
    }

    /**
     * @param {Object} jsObj
     * @param {String} tabs
     * @returns {String}
     */
    #recursiveFormatJsObjAsString(jsObj, tabs = '') {
        let data = '';
        for(let prop in jsObj) {
            const val = jsObj[prop];
            data += (tabs + prop);
            if(typeof val === 'object') {
                data += (':\n' + this.#recursiveFormatJsObjAsString(val, tabs + '\t'));
            }
            else
                data += (': "' + val + '".\n');
        }
        return data;
    }
}

module.exports = {TextLog};