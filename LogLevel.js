const { Dictionary } = require("./Dictionary.js");

class LogLevel {
    #variantsAsJsObj;
    #name;
    #value;
    #defaultValue = 'info';
    constructor(value = '', name = 'level', variantsAsJsObj = { info:'info', warn: 'warn', error: 'error' }) {
        this.#variantsAsJsObj = variantsAsJsObj;
        this.#name = name;
        this.#value = value;
    }
    asJsObj() {
        return {
            [this.#name]: (
                new Dictionary(
                    this.#variantsAsJsObj,
                    this.#defaultValue
                )
            ).valByKeyOrDefault(this.#value)
        };
    }
}

module.exports = {LogLevel};