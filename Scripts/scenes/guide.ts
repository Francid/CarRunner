/**
 * Program: Web Gammming @ Centennial College
 * Source file: end.ts
 * Author: Francis Ofougwuka
 * Date modified: 29/03/2016
 * Last modified by: Francis Ofougwuka
 * Revison history: 
 */


module scenes {
    // GUIDE SCENE CLASS
    export class Guide extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backButton: objects.Button;
        private _backLabel: objects.Label;
        private _guideImage: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            // Add Background Image to the Guide Scene
            this._guideImage = new createjs.Bitmap(assets.getResult("GuideBkg"));
            this.addChild(this._guideImage);        
            
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
        
        // Back Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.MENU;
            changeScene();
        }

    }
}