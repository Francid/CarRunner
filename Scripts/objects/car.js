/**
 * Program: Web Gammming @ Centennial College
 * Source file: Car.ts
 * Author: Francis Ofougwuka
 * Date modified:
 * Last modified by: Francis Ofougwuka
 * Revison history:
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // CAR CLASS ++++++++++++++++++++++++++++++++++++
    var Car = (function (_super) {
        __extends(Car, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Car() {
            _super.call(this, "car");
            this.name = "car";
            this._speed.x = 5; //car speed
            this._reset(this._rightBounds);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Car.prototype._checkBounds = function (value) {
            // check to see if the top of the car 
            // is outside the viewport         
            if (this.x <= value) {
                play.scores += 2;
                this._reset(this._rightBounds);
            }
        };
        // reset the car offscreen
        Car.prototype._reset = function (value) {
            this.x = Math.floor(Math.random() * this._rightBounds) + this._rightBounds + 20;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Car.prototype.update = function () {
            // scroll the car 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Car;
    }(objects.GameObject));
    objects.Car = Car;
})(objects || (objects = {}));
//# sourceMappingURL=car.js.map