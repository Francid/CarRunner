var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            this._lives = 10;
            this._scores = 0;
            //Set car count
            this._carCount = 3;
            //Instantiate the island
            this._car = new Array();
            // added road to the scene
            this._road = new objects.Road();
            this.addChild(this._road);
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // added car to the scene
            for (var car = 0; car < this._carCount; car++) {
                this._car[car] = new objects.Car();
                this.addChild(this._car[car]);
            }
            //this._lives = new managers.GameController();
            //Add Lives Label to the Play Scene
            this._livesText = new objects.Label("Lives: " + this._lives.toString(), "40px Consolas Bold", "#CD0000", 10, 10, false);
            this.addChild(this._livesText);
            //Add ScoreLabel to the Play Scene
            this._scoreText = new objects.Label("Score: " + this._scores.toString(), "40px Consolas Bold", "#CD0000", 460, 10, false);
            this.addChild(this._scoreText);
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._road.update();
            this._player.update();
            this._car.forEach(function (car) {
                car.update();
                if (_this._collision.check(car)) {
                    car._reset(0);
                    _this._lives -= 1;
                    _this._livesText.text = "Lives: " + _this._lives.toString();
                }
            });
            this._scoreText.text = "Score: " + this._scores.toString();
            if (this._lives <= 0) {
                this._endScene();
            }
        };
        Play.prototype._endScene = function () {
            //Switch to End Scene
            scene = config.Scene.END;
            changeScene();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map