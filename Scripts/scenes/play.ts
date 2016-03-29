// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _road: objects.Road;
        private _car: objects.Car[];
        private _player: objects.Player;
        private _carCount: number;
        private _collision: managers.Collision;
        private _livesText: objects.Label;
        private _scoreText: objects.Label;
        // private _lives: managers.GameController;
        private _lives: number;

        public _scores: number;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {

            this._lives = 10;
            this._scores = 0;

            //Set car count
            this._carCount = 3;

            //Instantiate the island
            this._car = new Array<objects.Car>();

            // added road to the scene
            this._road = new objects.Road();
            this.addChild(this._road);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            // added car to the scene
            for (var car: number = 0; car < this._carCount; car++) {
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
            
            createjs.Sound.play("playSceneMusic");

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._road.update();
            this._player.update();
            this._car.forEach(car => {
                car.update();
                if (this._collision.check(car)) {
                    car._reset(0);
                    this._lives -= 1;
                    this._livesText.text = "Lives: " + this._lives.toString();
                    createjs.Sound.play("hit");
                }
            });

            this._scoreText.text = "Score: " + this._scores.toString();
            
            if(this._lives <= 0){
                this._endScene();
            }
        }
        
        private _endScene():void{
            //Switch to End Scene
            scene = config.Scene.END;
            changeScene();
            createjs.Sound.stop();
        }

    }
}