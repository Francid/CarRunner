var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// GUIDE SCENE
var scenes;
(function (scenes) {
    var Guide = (function (_super) {
        __extends(Guide, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Guide() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Guide.prototype.start = function () {
            //Add Menu Label
            this._menuLabel = new objects.Label("MENU SCENE", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._menuLabel);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("BackButton", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Guide.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        Guide.prototype._startButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Guide;
    }(objects.Scene));
    scenes.Guide = Guide;
})(scenes || (scenes = {}));
//# sourceMappingURL=guide.js.map