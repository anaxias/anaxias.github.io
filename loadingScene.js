

class loadingScene extends Phaser.Scene{
	
	constructor(){
		super("loadGame");
	}
	
	preload(){
		this.add.text(20,20, "loading game....", {font: "25px Arial", fill:"yellow"});
		this.background = this.add.image(0,0,"background");
		this.background.setOrigin(0,0);
		this.load.image('hamster', 'assets/sprites/placeholder-hamster.png');
		
		//this.msg1 = this.add.image(800, 400, "test-msg");
		//this.msgs.add(msg1);
		
		//msg
		
	//	game.scale.pageAlignHorizontally = true;
	//	game.scale.pageAlignVertically = true;
		//game.scale.refresh();
	}
	
	create(){
		
		this.msg1 = this.add.image(config.width/2, config.height/2, "test-msg");
		this.hamster = this.physics.add.image(400, 300, 'hamster').setVelocity(SPEED, 0);
		
	}
	
	moveMsg(){
		
		console.log("test");
	}
	
	update(){
		this.moveMsg();
		this.pointerMove(this.input.activePointer);
		velocityFromRotation(this.hamster.rotation, SPEED, this.hamster.body.velocity);
		//this.hamster.body.debugBodyColor = (this.hamster.body.angularVelocity === 0) ? 0xff0000 : 0xffff00;
	}
	
	getPointerLocX(){
		var pointer = this.input.activePointer;
		 return pointer.x;
		
	}
	
	getPointerLocY(){
		var pointer = this.input.activePointer;
		 return pointer.y;
		
	}
	
	pointerMove(pointer) {  
		  var angleToPointer = Phaser.Math.Angle.BetweenPoints(this.hamster, pointer);
		  var angleDelta = angleToPointer - this.hamster.rotation;
		  
		  angleDelta = atan2(sin(angleDelta), cos(angleDelta));
		  
		  if (Phaser.Math.Within(angleDelta, 0, TOLERANCE)) {
			this.hamster.rotation = angleToPointer;
			this.hamster.setAngularVelocity(0);
		  } else {
			this.hamster.setAngularVelocity(Math.sign(angleDelta));
		  }
}
	
}
