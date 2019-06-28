
class titleScene extends Phaser.Scene{
	
	constructor(){
		super("bootGame");
	}
	
	preload(){
		this.load.image("background", "assets/images/backgroundv2.png");
		this.load.image("startscreen", "assets/images/startscreen.png");
		this.load.image("test-msg", "assets/images/message-placeholder.png");
		this.load.image("test-msg2", "assets/images/message-placeholder2.png");
		this.load.image("test-msg3", "assets/images/message-placeholder3.png");
	}
	
	create(){
		
		//this.add.text(20, 20, "TESTING");
		this.background = this.add.image(0,0,"startscreen");
		this.background.setOrigin(0,0);
		
		
		
		
		
		//this.msgs = this.physics.add.group();
		
	}
	
	update(){
		
		var pointer = this.input.activePointer;
		if (pointer.isDown) {
			this.scene.start("loadGame");

		}
	}
	
}