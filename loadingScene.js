

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
				
		msg1 = this.physics.add.image(config.width/2, config.height/2, "test-msg");
		msg2 = this.physics.add.image(config.width/1.5, config.height/1.5, "test-msg2");
		msg3 = this.physics.add.image(config.width/4, config.height/4, "test-msg3");
		hamster = this.physics.add.image(400, 300, 'hamster').setVelocity(0, 0);
		
		
		msg1.body.setCircle(42);
		msg2.body.setCircle(42);
		msg3.body.setCircle(42);
		
	//we will need to change this to just the "message" area later
	msg1.body.collideWorldBounds = true;
    msg2.body.collideWorldBounds = true;
    msg3.body.collideWorldBounds = true;
    hamster.body.collideWorldBounds = true;

    msg1.body.bounce.set(1);
    msg2.body.bounce.set(1);
    msg3.body.bounce.set(1);

    msg1.body.velocity.set(350);
    msg2.body.velocity.set(-250, 60);
    msg3.body.velocity.set(150);
		
	}
	
	moveMsg(){
		
		console.log("x:"+this.getPointerLocX()+" y:"+this.getPointerLocY());
		console.log(velocityFromRotation(hamster.rotation, SPEED, hamster.body.velocity));
	}
	
	update(){
		//this.moveMsg();
		this.pointerMove(this.input.activePointer);
		velocityFromRotation(hamster.rotation, SPEED, hamster.body.velocity);
		hamster.body.debugBodyColor = (hamster.body.angularVelocity === 0) ? 0xff0000 : 0xffff00;
		
		 this.physics.collide(msg1, msg2);
		this.physics.collide(msg1, msg3);
		this.physics.collide(msg2, msg3);
		this.physics.collide(hamster, msg1);
		this.physics.collide(hamster, msg2);
		this.physics.collide(hamster, msg3);
	}
	
	getPointerLocX(){
		var pointer = this.input.activePointer;
		 return pointer.x;
		
	}
	
	getPointerLocY(){
		var pointer = this.input.activePointer;
		 return pointer.y;
		
	}
	
	//referenced from https://codepen.io/samme/pen/JBwWLN?editors=0010
	pointerMove(pointer) {  
		  var angleToPointer = Phaser.Math.Angle.BetweenPoints(hamster, pointer);
		  var angleDelta = angleToPointer - hamster.rotation;
		  
		  angleDelta = atan2(sin(angleDelta), cos(angleDelta));
		  
		  if (Phaser.Math.Within(angleDelta, 0, TOLERANCE)) {
			hamster.rotation = angleToPointer;
			hamster.setAngularVelocity(0);
		  } else {
			hamster.setAngularVelocity(Math.sign(angleDelta) * ROTATION_SPEED_DEGREES);
		  }
}
	
}
