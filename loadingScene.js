

class loadingScene extends Phaser.Scene{
	
	constructor(){
		super("loadGame");
	}
	
	preload(){
		this.background = this.add.image(0,0,"background");
		this.background.setOrigin(0,0);
		this.load.image('hamster', 'assets/images/placeholder-hamster.png');
		this.load.audio('bgm', ['assets/audio/bgm-v1.mp3']);
		this.load.audio('success', ['assets/audio/discord_msg_sound.mp3']);
		
		this.load.image('100HP', 'assets/images/100percentHP.png');
		this.load.image('80HP', 'assets/images/80percentHP.png');
		this.load.image('60HP', 'assets/images/60percentHP.png');
		this.load.image('40HP', 'assets/images/40percentHP.png');
		this.load.image('20HP', 'assets/images/20percentHP.png');
		this.load.image('0HP', 'assets/images/noHP.png');
		

	}
	
	create(){
		
		//add channels
		general = this.physics.add.image(1050, 125, "general");
		art = this.physics.add.image(1050, 125, "art");
		music = this.physics.add.image(1050, 125, "music");
		prog = this.physics.add.image(1050, 125, "prog");
		memes = this.physics.add.image(1050, 125, "memes");
		
		HP = this.add.image(0,0, '100HP');
				
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
		

		
		backgroundMusic = this.sound.add('bgm');
		success_sfx = this.sound.add('success');
		backgroundMusic.loop = true;
		backgroundMusic.play();
		
		timer = this.time.addEvent({
			delay: Phaser.Math.Between(1000,8000),                // ms
			callback: this.addNewMessage,
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
		
		//bringToTop(child); we will use this to bring the correct HP bar to the top
		
		//this.moveMsg();
		
		//this updates the hamster movement
		this.pointerMove(this.input.activePointer);
		velocityFromRotation(hamster.rotation, SPEED, hamster.body.velocity);
		hamster.body.debugBodyColor = (hamster.body.angularVelocity === 0) ? 0xff0000 : 0xffff00;
				

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
	
	addNewMessage(){
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
			var random_velocity = Phaser.Math.Between(-150, -350);
			var random_velocity_angle = Phaser.Math.Between(0, 90);
			
			if(random_msg_type == 1){ // general
				var new_msg = this.physics.add.image(1050, start_loc, "test-msg3").setVelocity(random_velocity, random_velocity_angle);
				new_msg.body.setCircle(42);
				new_msg.body.collideWorldBounds = true;
				new_msg.body.bounce.set(1);
				message_array.push(new_msg); 
			}
			else if(random_msg_type == 2){ //art
				var new_msg = this.physics.add.image(1050, start_loc, "test-msg4").setVelocity(random_velocity, random_velocity_angle);
				new_msg.body.setCircle(42);
				new_msg.body.collideWorldBounds = true;
				new_msg.body.bounce.set(1);
				message_array.push(new_msg);
			}
			else if(random_msg_type == 3){ //music
				var new_msg = this.physics.add.image(1050, start_loc, "test-msg2").setVelocity(random_velocity, random_velocity_angle);
				new_msg.body.setCircle(42);
				new_msg.body.collideWorldBounds = true;
				new_msg.body.bounce.set(1);
				message_array.push(new_msg);
				
			}else if(random_msg_type == 4){ //programming
				var new_msg = this.physics.add.image(1050, start_loc, "test-msg5").setVelocity(random_velocity, random_velocity_angle);
				new_msg.body.setCircle(42);
				new_msg.body.collideWorldBounds = true;
				new_msg.body.bounce.set(1);
				message_array.push(new_msg);
			}
			else if(random_msg_type == 5){ //memes
				var new_msg = this.physics.add.image(1050, start_loc, "test-msg").setVelocity(random_velocity, random_velocity_angle);
				new_msg.body.setCircle(42);
				new_msg.body.collideWorldBounds = true;
				new_msg.body.bounce.set(1);
				message_array.push(new_msg);
			}
	}
	
}
