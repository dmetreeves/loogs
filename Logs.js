const { AnsiColoredLog } = require("./AnsiColoredLog.js");
const { NowhereOutput } = require("./NowhereOutput.js");
const { Dictionary } = require("./Dictionary.js");
const { GoogleLog } = require("./GoogleLog.js");
const { BaseLog } = require("./BaseLog.js");
const { TextLog } = require("./TextLog.js");
const { JsonLog } = require("./JsonLog.js");

/**
 * @class
 * Представляет множество логов в некотором ресурсе вывода.
 *
 */
class Logs {
    /**
     * @property {iOutput} #outputResource - Некоторый ресурс вывода логов
     */
    #outputResource;
    /**
     * @property {Dictionary} #initOutputs - Словарь с ключами - названиями среды исполнения и значениями списками применяемых декораторов к логам и со списком по умолчанию.
     */
    #initOutputs = (new Dictionary)
        .withEntry(
            'dev',
            [ TextLog, AnsiColoredLog ]
        )
        .withDefaultVal(
            [ JsonLog, GoogleLog ]
        );
    /**
     * @property {Array<BaseLog>}
     */
    #usedOutputs = [];
    /**
     * @param {AbstractOutput} outputResource
     * @param {String} environment
     */
    constructor(outputResource = new NowhereOutput, environment = 'dev') {
        this.#outputResource = outputResource;
        this.#usedOutputs = this.#initOutputs.valByKeyOrDefault(environment);
    }

    /**
     * @param {Object} jsObj
     */
    #add(jsObj) {
        let currLog = BaseLog.newFromJsObj(jsObj);
        this.#usedOutputs.forEach(nextLog => {
            currLog = nextLog.newFromLog(currLog);
        });
        this.#outputResource.add( currLog.level(), currLog.asString() );
    }
    /**
     * @param {Object} jsObj
     */
    add(jsObj) {
        this.#add(jsObj);
    }

    /**
     * @param {Object} jsObj
     * @param {String} level
     */
    #addWithLevel(jsObj, level) {
        this.#add(
            Object.assign({ level: level }, jsObj)
        );
    }
    /**
     * @param {Object} jsObj
     */
    addInfo(jsObj) {
        this.#addWithLevel(jsObj, 'info');
    }
    /**
     * @param {Object} jsObj
     */
    addErr(jsObj) {
        this.#addWithLevel(jsObj, 'error');
    }
    /**
     * @param {Object} jsObj
     */
    addWarn(jsObj) {
        this.#addWithLevel(jsObj, 'warn');
    }
}

module.exports = {Logs};