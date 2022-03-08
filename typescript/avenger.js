"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Avenger = void 0;
var superhero_1 = require("./superhero");
var Avenger = /** @class */ (function (_super) {
    __extends(Avenger, _super);
    function Avenger(name, gender, oneliner) {
        var _this = _super.call(this, name, gender, "Avengers", oneliner) || this;
        _this.name = name;
        _this.gender = gender;
        _this.oneliner = oneliner;
        return _this;
    }
    return Avenger;
}(superhero_1.Superhero));
exports.Avenger = Avenger;
