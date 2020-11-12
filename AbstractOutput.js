/**
 * Interface
 * @interface iOutput
 */
/**
 * Puts content into output
 * @method
 * @name iOutput#add
 * @param {String} level - Уровень вывода
 * @param {*} data - Выводимые данные
 */

/**
 * @implements iOutput
 */
class AbstractOutput {
    /**
     * @inheritDoc
     */
    add(level, data) {}
}

module.exports = {AbstractOutput};