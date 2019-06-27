
class titleScene extends Phaser.Scene{
	
	constructor(){
		super("bootGame");
	}
	
	preload(){
		this.load.image("background", "assets/images/blank-background.png");
		this.load.image("startscreen", "assets/images/startscreen.png");
		this.load.image("test-msg", "assets/images/message-placeholder.png");
	}
	
	create(){
		
		//this.add.text(20, 20, "TESTING");
		this.background = this.add.image(0,0,"startscreen");
		this.background.setOrigin(0,0);
		
		var pointer = this.input.activePointer;
		
		
		
		//this.msgs = this.physics.add.group();
		
	}
	
	update(){
		if (pointer.isDown) {
			this.scene.start("loadGame");

		}
	}
	
}