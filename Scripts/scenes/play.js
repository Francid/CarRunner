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
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            this._road.update();
            this._player.update();
            this._car.forEach(function (car) {
                car.update();
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map