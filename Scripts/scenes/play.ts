// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _road: objects.Road;
        private _island: objects.Island[];
        private _cloud: objects.Cloud;
        private _islandCount:number;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            
            //Set Island count
            this._islandCount = 3;
            
            //Instantiate the island
            this._island = new Array<objects.Island>();
            
            // added ocean to the scene
            this._road = new objects.Road();
            this.addChild(this._road);

            // added island to the scene
            for (var island: number = 0; island < this._islandCount; island++) {
                this._island[island] = new objects.Island();
                this.addChild(this._island[island]);
            }
            
            //added cloud to the scene
            this._cloud = new objects.Cloud();
            this.addChild(this._cloud);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._road.update();
            this._island.forEach(island => {
               island.update(); 
            });
            this._cloud.update();
        }


        //EVENT HANDLERS ++++++++++++++++++++

    }
}