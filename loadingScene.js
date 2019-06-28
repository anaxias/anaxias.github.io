

class loadingScene extends Phaser.Scene{
	
	constructor(){
		super("loadGame");
	}
	
	preload(){
		this.add.text(20,20, "loading game....", {font: "25px Arial", fill:"yellow"});
		this.background = this.add.image(0,0,"background");
		this.background.setOrigin(0,0);
		this.load.image('hamster', 'assets/images/placeholder-hamster.png');
		this.load.audio('bgm', ['assets/audio/bgm-v1.mp3']);

	}
	
	create(){
				
		var msg1 = this.physics.add.image(1050, 125, "test-msg").setVelocity(350);
		message_array.push(msg1);
		var msg2 = this.physics.add.image(1050, 225, "test-msg2").setVelocity(-250, 60);
		message_array.push(msg2);
		var msg3 = this.physics.add.image(1050, 275, "test-msg3").setVelocity(150);
		message_array.push(msg3);
		
		hamster = this.physics.add.image(400, 300, 'hamster').setVelocity(0, 0);
		hamster.body.collideWorldBounds = true;
		
		
		for (var i = 0; i < message_array.length; i++) {
			message_array[i].body.setCircle(42);
			message_array[i].body.collideWorldBounds = true;
			message_array[i].body.bounce.set(1);
		}
		

		
		var backgroundMusic = this.sound.add('bgm');
		backgroundMusic.loop = true;
		backgroundMusic.play();
		
		timer = this.time.addEvent({
			delay: 500,                // ms
			callback: function(){console.log("It's been a milisecond!");},
			//args: [],
			callbackScope: this,
			loop: true
		});

		
	}
	
	
	
	moveMsg(){
		
		console.log("x:"+this.getPointerLocX()+" y:"+this.getPointerLocY());
		console.log(velocityFromRotation(hamster.rotation, SPEED, hamster.body.velocity));
	}
	
	update(){
		//this.moveMsg();
		
		//this updates the hamster movement
		this.pointerMove(this.input.activePointer);
		velocityFromRotation(hamster.rotation, SPEED, hamster.body.velocity);
		hamster.body.debugBodyColor = (hamster.body.angularVelocity === 0) ? 0xff0000 : 0xffff00;
				
				//console.log(timer.getElapsedSeconds()*100);
		
		//this will generate a new message of a random type from a random user
		if((Phaser.Math.FloorTo(timer.getElapsedSeconds()*100))%5 == 0){
			console.log("Lets make a new spawn!");
			var random_user = Phaser.Math.Between(1, 4);
			
			if(random_user == 1){
				var start_loc = 125;	
			}
			else if(random_user == 2){
				var start_loc = 175;
			}
			else if(random_user == 3){
				var start_loc = 225;
				
			}else if(random_user == 4){
				var start_loc = 275;
			}
			else start_loc = 100; //just in case
			
			
			var random_msg_type = Phaser.Math.Between(1, 5);
			
			if(random_msg_type == 1){ // general
				var new_msg = this.physics.add.image(1050, start_loc, "test-msg3").setVelocity(350);
				new_msg.body.setCircle(42);
				new_msg.body.collideWorldBounds = true;
				new_msg.body.bounce.set(1);
				message_array.push(new_msg);
			}
			else if(random_msg_type == 2){ //art
				var new_msg = this.physics.add.image(1050, start_loc, "test-msg4").setVelocity(350);
				new_msg.body.setCircle(42);
				new_msg.body.collideWorldBounds = true;
				new_msg.body.bounce.set(1);
				message_array.push(new_msg);
			}
			else if(random_msg_type == 3){ //music
				var new_msg = this.physics.add.image(1050, start_loc, "test-msg2").setVelocity(350);
				new_msg.body.setCircle(42);
				new_msg.body.collideWorldBounds = true;
				new_msg.body.bounce.set(1);
				message_array.push(new_msg);
				
			}else if(random_msg_type == 4){ //programming
				var new_msg = this.physics.add.image(1050, start_loc, "test-msg5").setVelocity(350);
				new_msg.body.setCircle(42);
				new_msg.body.collideWorldBounds = true;
				new_msg.body.bounce.set(1);
				message_array.push(new_msg);
			}
			else if(random_msg_type == 5){ //memes
				var new_msg = this.physics.add.image(1050, start_loc, "test-msg").setVelocity(350);
				new_msg.body.setCircle(42);
				new_msg.body.collideWorldBounds = true;
				new_msg.body.bounce.set(1);
				message_array.push(new_msg);
			}
			
		}
		
		
		
		// this.physics.collide(msg1, msg2);
	//	this.physics.collide(msg1, msg3);
		//this.physics.collide(msg2, msg3);

		//this updates the collisions
		for (var i = 0; i < message_array.length; i++) {
			this.physics.collide(hamster, message_array[i]);
		}
		
		
		
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
			hamster.setAngularVelocity(Math.sign(angleDelta));
		  }
}
	
}
