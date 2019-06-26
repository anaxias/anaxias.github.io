
class titleScene extends Phaser.Scene{
	
	constructor(){
		super("bootGame");
	}
	
	preload(){
		this.load.image("background", "assets/images/blank-background.png");
		this.load.image("test-msg", "assets/images/message-placeholder.png");
	}
	
	create(){
		
		this.add.text(20, 20, "TESTING");
		this.scene.start("loadGame");
		
		//this.msgs = this.physics.add.group();
		
	}
	
}