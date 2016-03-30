/**
 * Program: Web Gammming @ Centennial College
 * Source file: menu.ts
 * Author: Francis Ofougwuka
 * Date modified: 29/03/2016
 * Last modified by: Francis Ofougwuka
 * Revison history: 
 */


module scenes {
    // MENU SCENE CLASS
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _startButton: objects.Button;
        private _guideButton: objects.Button;
        private _menuImage: createjs.Bitmap;
        private _guideLabel: objects.Label;
        private _raceLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            //Add Background Image
            this._menuImage = new createjs.Bitmap(assets.getResult("MenuBkg"));
            this.addChild(this._menuImage);            
            
            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 100, true);
            this.addChild(this._startButton);
            
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            // Add Guide Button to the Menu Scene
            this._guideButton = new objects.Button(
                "GuideButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 100, true);
            this.addChild(this._guideButton);
            
            //Guide Button event listener
            this._guideButton.on("click", this._guideButtonClick, this);
            
            // Add Label to the StartButton
            this._raceLabel = new objects.Label(
                "RACE", 
                "20px Consolas Bold", 
                "#CD0000", 
                config.Screen.CENTER_X - 90, 
                config.Screen.CENTER_Y + 130, true);
            this.addChild(this._raceLabel);
            
            // Add Label to the StartButton
            this._guideLabel = new objects.Label(
                "INSTRUCTION", 
                "20px Consolas", 
                "#CD0000", 
                config.Screen.CENTER_X + 90, 
                config.Screen.CENTER_Y + 130, true);
            this.addChild(this._guideLabel);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // StartButton click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.PLAY;
            changeScene();
        }
        
        // StartButton click event handler
        private _guideButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.GUIDE;
            changeScene();
        }

    }
}