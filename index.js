"use strict";
exports.__esModule = true;
var cross_fetch_1 = require("cross-fetch");
function getTodosByCount(count) {
    for (var i = 0; i < count; i++) {
        (0, cross_fetch_1["default"])('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (response) { return response.text(); })
            .then(function (responseText) {
            return JSON.parse(responseText);
        })
            .then(function (responseText) { return console.log(responseText); });
    }
}
getTodosByCount(10);
