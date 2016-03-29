// LEFT_CAVE SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _menuLabel: objects.Label;
        private _restartButton: objects.Button;
        private _gameOverImage: createjs.Bitmap;
        private _highScoreLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS ++++++++++++++++++++
        
        
        // Start Method
        public start(): void {
            
            // Add Background Image to the End Scene
            this._gameOverImage = new createjs.Bitmap(assets.getResult("EndBkg"));
            this.addChild(this._gameOverImage);
            
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X + 200,
                config.Screen.CENTER_Y + 140, true);
            this.addChild(this._restartButton);
           
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            
            // Add Label to the Menu Button
            this._menuLabel = new objects.Label(
                "MENU", 
                "20px Consolas Bold", 
                "#FFFFFF", 
                config.Screen.CENTER_X + 170, 
                config.Screen.CENTER_Y + 170, true);
            this.addChild(this._menuLabel);
            
            //Add High Score Label
            this._highScoreLabel = new objects.Label(
                "Highest Score: "+ play.scores, 
                "40px Consolas Bold", 
                "#CD0000", 
                config.Screen.CENTER_X, 
                config.Screen.CENTER_Y + 50, true);
            this.addChild(this._highScoreLabel);
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}