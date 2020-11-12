/**
 * Interface
 * @interface Log
 */
/**
 * Возвращает свое представление в виде строки
 * @method
 * @name Log#newWithJsObj
 * @param {Object} jsObj Какой-то JS Объект
 * @returns {Log} Добавляет JS Объект в лог и возрвщает объект лог
 */
/**
 * Возвращает свое представление в виде строки
 * @method
 * @static
 * @name Log#newFromLog
 * @param {Log} log Какой-то Объект-лог
 * @returns {Log} возвращает объект лог декоратор на основе другого основного объекта лога
 */
/**
 * Возвращает свой уровень логгирования
 * @function
 * @name Log#level
 * @returns {String} - Уровень лога
 */
/**
 * Возвращает свое представление в виде JS объека
 * @function
 * @name Log#asJsObj
 * @returns {Object} - Представление лога в виде JS объекта
 */
/**
 * Возвращает свое представление в виде строки
 * @function
 * @name Log#asString
 * @returns {String} - Представление лога в виде строки
 */