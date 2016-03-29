/**
 * Program: Web Gammming @ Centennial College
 * Source file: Road.ts
 * Author: Francis Ofougwuka
 * Date modified:
 * Last modified by: Francis Ofougwuka
 * Revison history: 
 */
module objects {
    // ROAD CLASS ++++++++++++++++++++++++++++++++++++
    export class Road extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("road");
            
           this._speed.x = 5; //Road speed
           this._reset(0);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the road 
            // is met the top of the scene
            
            if(this.x <= value) {
                this._reset(0);
            }
        }
        
        // reset the road offscreen
        protected _reset(value:number):void {
            this.x = value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the ocean 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(-800);
        }
    }
}