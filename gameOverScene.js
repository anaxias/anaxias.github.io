

class gameOverScene extends Phaser.Scene{
	
	constructor(){
		super("endGame");
	}
	
	
	preload(){
		this.load.image("crash", "assets/images/discord-crash-screen.png");
		
	}
	
	create(){
		
		this.background = this.add.image(0,0,"crash");
		this.background.setOrigin(0,0);


		
		
		introMusic = this.sound.add('intro-music');
		introMusic.loop = true;
		introMusic.play();
		
		
		
		
		//this.msgs = this.physics.add.group();
		
	}
	
	update(){
		
		var pointer = this.input.activePointer;
		if (pointer.isDown) {
			window.location.reload(); 

		}
	}
}
