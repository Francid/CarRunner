/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var menu;
var play;
var end;
var guide;
var assetData = [
    // Add your Assets here
    { id: "menuSceneMusic", src: "../../Assets/audio/menuSceneMusic.mp3" },
    { id: "playSceneMusic", src: "../../Assets/audio/playSceneMusic.mp3" },
    { id: "endSceneMusic", src: "../../Assets/audio/endSceneMusic.mp3" },
    { id: "hit", src: "../../Assets/audio/hit.mp3" },
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "RestartButton", src: "../../Assets/images/RestartButton.png" },
    { id: "BackButton", src: "../../Assets/images/BackButton.png" },
    { id: "road", src: "../../Assets/images/road.png" },
    { id: "player", src: "../../Assets/images/player.png" },
    { id: "car", src: "../../Assets/images/car.png" },
    { id: "GuideButton", src: "../../Assets/images/GuideButton.png" },
    { id: "MenuBkg", src: "../../Assets/images/MenuBkg.png" },
    { id: "EndBkg", src: "../../Assets/images/EndBkg.png" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            createjs.Sound.stop();
            createjs.Sound.play("menuSceneMusic", { loop: 20 });
            console.log("Starting MENU Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            createjs.Sound.stop();
            createjs.Sound.play("playSceneMusic", { loop: 20 });
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            createjs.Sound.stop();
            createjs.Sound.play("endSceneMusic", { loop: 20 });
            console.log("Starting END Scene");
            break;
        case config.Scene.GUIDE:
            // show the GUIDE scene
            stage.removeAllChildren();
            guide = new scenes.Guide();
            currentScene = guide;
            console.log("Starting Guide Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
window.onload = preload;
//# sourceMappingURL=game.js.map