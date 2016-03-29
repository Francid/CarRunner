// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _road: objects.Road;
        private _car: objects.Car[];
        private _player: objects.Player;
        private _carCount:number;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            
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
            

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._road.update();
            this._player.update();
            this._car.forEach(car => {
               car.update(); 
            });
        }


        //EVENT HANDLERS ++++++++++++++++++++

    }
}