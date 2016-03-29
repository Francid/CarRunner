var managers;
(function (managers) {
    // COLLISION MANAGER CLASS
    var Collision = (function () {
        //private _playerLives: managers.GameController;
        function Collision(player) {
            this._player = player;
            //this._playerLives = new managers.GameController();
        }
        Collision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        Collision.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfWidth = this._player.width * 0.5;
            var objectHalfWidth = object.width * 0.5;
            var minimumDistance = playerHalfWidth + objectHalfWidth;
            startPoint.x = this._player.y;
            startPoint.y = this._player.x;
            endPoint.x = object.centerY + object.y;
            endPoint.y = object.centerX + object.x;
            /* check if the distance between the player and
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                // check if it's an island hit
                if (object.name === "car") {
                    return true;
                }
            }
            return false;
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map