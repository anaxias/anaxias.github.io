
class titleScene extends Phaser.Scene{
	
	constructor(){
		super("bootGame");
	}
	
	preload(){
		this.load.image("background", "assets/images/backgroundv2.png");
		this.load.image("startscreen", "assets/images/startscreen.png");
		this.load.image("test-msg", "assets/images/message-memes.png");
		this.load.image("test-msg2", "assets/images/message-music.png");
		this.load.image("test-msg3", "assets/images/message-general.png");
		this.load.image("test-msg4", "assets/images/message-art.png");
		this.load.image("test-msg5", "assets/images/message-prog.png");
		this.load.image("memes", "assets/images/memes_channel.png");
		this.load.image("music", "assets/images/music_channel.png");
		this.load.image("general", "assets/images/general_channel.png");
		this.load.image("art", "assets/images/art_channel.png");
		this.load.image("prog", "assets/images/prog_channel.png");
		this.load.audio('intro-music', ['assets/audio/bgm-title-1.mp3']);
	}
	
	create(){
		
		//this.add.text(20, 20, "TESTING");
		this.background = this.add.image(0,0,"startscreen");
		this.background.setOrigin(0,0);
		
		
		introMusic = this.sound.add('intro-music');
		introMusic.loop = true;
		introMusic.play();
		
		
		
		
		//this.msgs = this.physics.add.group();
		
	}
	
	update(){
		
		var pointer = this.input.activePointer;
		if (pointer.isDown) {
			this.scene.start("loadGame");
			introMusic.stop();

		}
	}
	
}