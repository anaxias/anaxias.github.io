
	var config = {
		width: 1278,
		height: 718,
		backgroundColor: 0x000000,
		scene: [titleScene, loadingScene, gameScene, gameOverScene],
		physics:{
			default: "arcade",
			arcade:{
				debug:false, //change to true to see trajectories and physics colliders
				fps: 100
			}
		}
	};
	
	var game = new Phaser.Game(config);

var SPEED = 200;
var ROTATION_SPEED = 2 * Math.PI / 4;
var ROTATION_SPEED_DEGREES = Phaser.Math.RadToDeg(ROTATION_SPEED);
var TOLERANCE = 1 * ROTATION_SPEED;

var velocityFromRotation = Phaser.Physics.Arcade.ArcadePhysics.prototype.velocityFromRotation;
var sin = Math.sin;
var cos = Math.cos;
var atan2 = Math.atan2;
var hamster;
var timer;
var message_array = [];
