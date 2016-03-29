module managers {
    /**
    * name
    */
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