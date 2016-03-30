/**
 * Program: Web Gammming @ Centennial College
 * Source file: GameController.ts
 * Author: Francis Ofougwuka
 * Date modified: 29/03/2016
 * Last modified by: Francis Ofougwuka
 * Revison history: 
 */
module managers {
    //GameController Class
    export class GameController {

        //PRIVATE INSTANCE VARIABLE
        private _livesValue: number;
        private _scoreValue: number;

        constructor() {

            this._livesValue = 10;
        }

        //GETTER AND SETTER for livesValuse and ScoreValue
        get LivesValue(): number {
            return this._livesValue;
        }
        set LivesValue(value : number) {
            this._livesValue = value;
        }

        get ScoreValue(): number {
            return this._scoreValue;
        }
        set ScoreValue(value : number) {
            this.ScoreValue = value;
        }

    }
}