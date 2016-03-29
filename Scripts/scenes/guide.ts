// GUIDE SCENE
module scenes {
    export class Guide extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backButton: objects.Button;
        private _backLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {            
            
            // add the Start button to the MENU scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X + 200,
                config.Screen.CENTER_Y + 150, true);
            this.addChild(this._backButton);
            
            // Start Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            
            // Add Label to the Back Button
            this._backLabel = new objects.Label(
                "MENU", 
                "20px Consolas Bold", 
                "#CD0000", 
                config.Screen.CENTER_X + 170, 
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backLabel);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEFT_CAVE Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.MENU;
            changeScene();
        }

    }
}