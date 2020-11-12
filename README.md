## loogs
#### Объектно-ориентированная библиотека nodejs для логгирования объектов с помощью декораторов
##
#### Примеры

Базовый лог с уровнем и датой
```js
const { ConsoleOutput } = require("./ConsoleOutput.js");
const { BaseLog } = require("./BaseLog.js");
const jsObj = {
    'level': 'info',
    'message':'log',
    'payload': {
        'a':1,
        'b':[2, 3, 4],
        'c': {
            5: true
        }
    }
}
const baseLog = BaseLog.newFromJsObj(jsObj);
const output = new ConsoleOutput;
output.add( baseLog.level(), baseLog.asJsObj() )
```

В текстовой форме
```js
const { TextLog } = require("./TextLog.js");
ConsoleOutput.newWith(
    TextLog.newFromLog(
        baseLog
    )
);
```
Цветной (error![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+), warn![#f03c15](https://via.placeholder.com/15/ffff00/000000?text=+), info![#f03c15](https://via.placeholder.com/15/00ffff/000000?text=+))
```js
const { AnsiColoredLog } = require("./AnsiColoredLog.js");
ConsoleOutput.newWith(
    AnsiColoredLog.newFromLog(
        TextLog.newFromLog(
            baseLog
        )
    )
);
```
В виде json строки
```js
const { JsonLog } = require("./JsonLog.js");
ConsoleOutput.newWith(
    JsonLog.newFromLog(
        baseLog
    )
);
```
С добавлением Google Stackdriver параметра severity
```js
const { GoogleLog } = require("./GoogleLog.js");
ConsoleOutput.newWith(
    GoogleLog.newFromLog(
        JsonLog.newFromLog(
            baseLog
        )
    )
);
```
Возможна любая комбинация декораторов благодаря единому интерфейсу
```js
output.addAsString(
    AnsiColoredLog.newFromLog(
        JsonLog.newFromLog(
            baseLog
        )
    )
);
output.addAsString(
    TextLog.newFromLog(
        GoogleLog.newFromLog(
            baseLog
        )
    )
);
```
Автоматический подбор композиции декорированных логов в зависимости от параматра среды выполнения
```js
const { Logs } = require("./Logs.js");

const devLogs = new Logs(output, 'dev');
devLogs.add(jsObj);

const prodLogs = new Logs(output, 'any');
prodLogs.addError({'message':'oops'});
```