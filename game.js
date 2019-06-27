
	var config = {
		width: 1418,
		height: 756,
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

