/**
 * Program: Web Gammming @ Centennial College
 * Source file: end.ts
 * Author: Francis Ofougwuka
 * Date modified: 29/03/2016
 * Last modified by: Francis Ofougwuka
 * Revison history:
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    // End SCENE CLASS
    var End = (function (_super) {
        __extends(End, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function End() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        End.prototype.start = function () {
            // Add Background Image to the End Scene
            this._gameOverImage = new createjs.Bitmap(assets.getResult("EndBkg"));
            this.addChild(this._gameOverImage);
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 140, true);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // Add Label to the Menu Button
            this._menuLabel = new objects.Label("MENU", "20px Consolas Bold", "#FFFFFF", config.Screen.CENTER_X + 170, config.Screen.CENTER_Y + 170, true);
            this.addChild(this._menuLabel);
            //Add High Score Label
            this._highScoreLabel = new objects.Label("Highest Score: " + play.scores, "40px Consolas Bold", "#CD0000", config.Screen.CENTER_X, config.Screen.CENTER_Y + 50, true);
            this.addChild(this._highScoreLabel);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        End.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        End.prototype._restartButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map