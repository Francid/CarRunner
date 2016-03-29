module managers {
    // COLLISION MANAGER CLASS
    export class Collision {
        // PRIVATE INSTANCE VARIABLES
        private _player: objects.Player;
        //private _playerLives: managers.GameController;
        
        
        constructor(player:objects.Player) {
            this._player = player;
            //this._playerLives = new managers.GameController();
        }
        
        public distance(startPoint:createjs.Point, endPoint:createjs.Point):number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x),2) + Math.pow(endPoint.y - startPoint.y,2))
        }
        
        public check(object:objects.GameObject):boolean{
            var startPoint:createjs.Point = new createjs.Point();
            var endPoint:createjs.Point = new createjs.Point();
            var playerHalfWidth:number = this._player.width * 0.5;
            var objectHalfWidth:number = object.width * 0.5;
            var minimumDistance:number = playerHalfWidth + objectHalfWidth;
            
            startPoint.x = this._player.y;
            startPoint.y = this._player.x;
            
            endPoint.x = object.centerY + object.y;
            endPoint.y = object.centerX + object.x;
            
            
            /* check if the distance between the player and 
              the other object is less than the minimum distance */
            if(this.distance(startPoint, endPoint) < minimumDistance) {
                
                // check if it's an island hit
                if(object.name === "car") {
                    return true;
                    //this._playerLives.LivesValue -= 1;
                }
            }
            
            return false;
        }
    }
}