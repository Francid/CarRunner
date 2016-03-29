var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            //Add Background Image
            this._menuImage = new createjs.Bitmap(assets.getResult("MenuBkg"));
            this.addChild(this._menuImage);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 100, true);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // Add Guide Button to the Menu Scene
            this._guideButton = new objects.Button("GuideButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 100, true);
            this.addChild(this._guideButton);
            //Guide Button event listener
            this._guideButton.on("click", this._guideButtonClick, this);
            // Add Label to the StartButton
            this._raceLabel = new objects.Label("RACE", "20px Consolas Bold", "#CD0000", config.Screen.CENTER_X - 90, config.Screen.CENTER_Y + 130, true);
            this.addChild(this._raceLabel);
            // Add Label to the StartButton
            this._guideLabel = new objects.Label("INSTRUCTION", "20px Consolas", "#CD0000", config.Screen.CENTER_X + 90, config.Screen.CENTER_Y + 130, true);
            this.addChild(this._guideLabel);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // MENU Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // StartButton click event handler
        Menu.prototype._startButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        // StartButton click event handler
        Menu.prototype._guideButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.GUIDE;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map