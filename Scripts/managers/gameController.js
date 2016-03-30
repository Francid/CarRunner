/**
 * Program: Web Gammming @ Centennial College
 * Source file: GameController.ts
 * Author: Francis Ofougwuka
 * Date modified: 29/03/2016
 * Last modified by: Francis Ofougwuka
 * Revison history:
 */
var managers;
(function (managers) {
    //GameController Class
    var GameController = (function () {
        function GameController() {
            this._livesValue = 10;
        }
        Object.defineProperty(GameController.prototype, "LivesValue", {
            //GETTER AND SETTER for livesValuse and ScoreValue
            get: function () {
                return this._livesValue;
            },
            set: function (value) {
                this._livesValue = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameController.prototype, "ScoreValue", {
            get: function () {
                return this._scoreValue;
            },
            set: function (value) {
                this.ScoreValue = value;
            },
            enumerable: true,
            configurable: true
        });
        return GameController;
    }());
    managers.GameController = GameController;
})(managers || (managers = {}));
//# sourceMappingURL=gameController.js.map