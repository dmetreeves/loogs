const { AbstractOutput } = require("./AbstractOutput.js");

class ConsoleOutput extends AbstractOutput {
    /**
     * @inheritDoc
     */
    add(level, data) {
        console[ level ]( data )
    }
    addAsString(log) {
        console[ log.level() ]( log.asString() )
    }
    static newWith(log) {
        const out = new this;
        out.addAsString(log);
        return out;
    }
}

module.exports = {ConsoleOutput};