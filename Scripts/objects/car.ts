/**
 * Program: Web Gammming @ Centennial College
 * Source file: Car.ts
 * Author: Francis Ofougwuka
 * Date modified:
 * Last modified by: Francis Ofougwuka
 * Revison history: 
 */

module objects {
    // CAR CLASS ++++++++++++++++++++++++++++++++++++
    export class Car extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("car");
            this.name = "car";
            
            this._speed.x = 5; //car speed
            this._reset(this._rightBounds);
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the top of the car 
            // is outside the viewport         
            if (this.x <= value) {
                play.scores +=2;
                this._reset(this._rightBounds);
            }
        }

        // reset the car offscreen
        public _reset(value: number): void {
            this.x = Math.floor(Math.random() * this._rightBounds) + this._rightBounds + 20;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the car 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds);
        }
    }
}