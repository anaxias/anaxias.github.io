
	var config = {
		width: 1278,
		height: 718,
		backgroundColor: 0x000000,
		scene: [titleScene, loadingScene, gameScene, gameOverScene],
		physics:{
			default: "arcade",
			arcade:{
				debug:true
			}
		}
	};
	
	var game = new Phaser.Game(config);

var SPEED = 150;
var ROTATION_SPEED = 2 * Math.PI;
var ROTATION_SPEED_DEGREES = Phaser.Math.RadToDeg(ROTATION_SPEED);
var TOLERANCE = 0.01 * ROTATION_SPEED;

var velocityFromRotation = Phaser.Physics.Arcade.ArcadePhysics.prototype.velocityFromRotation;
var sin = Math.sin;
var cos = Math.cos;
var atan2 = Math.atan2;