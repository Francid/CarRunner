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
    // GUIDE SCENE CLASS
    var Guide = (function (_super) {
        __extends(Guide, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Guide() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Guide.prototype.start = function () {
            // Add Background Image to the Guide Scene
            this._guideImage = new createjs.Bitmap(assets.getResult("GuideBkg"));
            this.addChild(this._guideImage);
            // add the Start button to the MENU scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 150, true);
            this.addChild(this._backButton);
            // Start Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // Add Label to the Back Button
            this._backLabel = new objects.Label("MENU", "20px Consolas Bold", "#CD0000", config.Screen.CENTER_X + 170, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backLabel);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Guide.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Back Button click event handler
        Guide.prototype._backButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Guide;
    }(objects.Scene));
    scenes.Guide = Guide;
})(scenes || (scenes = {}));
//# sourceMappingURL=guide.js.map