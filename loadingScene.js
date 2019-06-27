

class loadingScene extends Phaser.Scene{
	
	constructor(){
		super("loadGame");
	}
	
	preload(){
		this.add.text(20,20, "loading game....", {font: "25px Arial", fill:"yellow"});
		this.background = this.add.image(0,0,"background");
		this.background.setOrigin(0,0);
		this.load.image('hamster', 'assets/images/placeholder-hamster.png');

	}
	
	create(){
		
		this.msg1 = this.add.image(config.width/2, config.height/2, "test-msg");
		hamster = this.physics.add.image(400, 300, 'hamster').setVelocity(0, 0);
		
	}
	
	moveMsg(){
		
		console.log("x:"+this.getPointerLocX()+" y:"+this.getPointerLocY());
	}
	
	update(){
		this.moveMsg();
		this.pointerMove(this.input.activePointer);
		velocityFromRotation(hamster.rotation, SPEED, hamster.body.velocity);
		hamster.body.debugBodyColor = (hamster.body.angularVelocity === 0) ? 0xff0000 : 0xffff00;
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
		  var angleToPointer = Phaser.Math.Angle.BetweenPoints(hamster, pointer);
		  var angleDelta = angleToPointer - hamster.rotation;
		  
		  angleDelta = atan2(sin(angleDelta), cos(angleDelta));
		  
		  if (Phaser.Math.Within(angleDelta, 0, TOLERANCE)) {
			hamster.rotation = angleToPointer;
			hamster.setAngularVelocity(0);
		  } else {
			hamster.setAngularVelocity(Math.sign(angleDelta));
		  }
}
	
}
