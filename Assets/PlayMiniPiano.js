#pragma strict
var notes : GameObject[];

function Start () {

}

function Update () {

	MyPlay(KeyCode.Z , notes[0]);
	MyPlay(KeyCode.S , notes[1]);
	MyPlay(KeyCode.X , notes[2]);
	MyPlay(KeyCode.D , notes[3]);
	MyPlay(KeyCode.C , notes[4]);
	MyPlay(KeyCode.V , notes[5]);
	MyPlay(KeyCode.G , notes[6]);
	MyPlay(KeyCode.B , notes[7]);
	MyPlay(KeyCode.H , notes[8]);
	MyPlay(KeyCode.N , notes[9]);
	MyPlay(KeyCode.J , notes[10]);
	MyPlay(KeyCode.M , notes[11]);
	
	MyPlay(KeyCode.Comma , KeyCode.Q , notes[12]);
	MyPlay(KeyCode.L , KeyCode.Alpha2 , notes[13]);
	MyPlay(KeyCode.Period , KeyCode.W , notes[14]);
	MyPlay(KeyCode.Semicolon , KeyCode.Alpha3 , notes[15]);
	MyPlay(KeyCode.Slash , KeyCode.E , notes[16]);
	
/*    MyPlay(KeyCode.Q , notes[12]);
	MyPlay(KeyCode.Alpha2 , notes[13]);
	MyPlay(KeyCode.W , notes[14]);
	MyPlay(KeyCode.Alpha3 , notes[15]);
	MyPlay(KeyCode.E , notes[16]);*/
	
	MyPlay(KeyCode.R , notes[17]);
	MyPlay(KeyCode.Alpha5 , notes[18]);
	MyPlay(KeyCode.T , notes[19]);
	MyPlay(KeyCode.Alpha6 , notes[20]);
	MyPlay(KeyCode.Y , notes[21]);
	MyPlay(KeyCode.Alpha7 , notes[22]);
	MyPlay(KeyCode.U , notes[23]);
	MyPlay(KeyCode.I , notes[24]);
	MyPlay(KeyCode.Alpha9 , notes[25]);
	MyPlay(KeyCode.O , notes[26]);
	MyPlay(KeyCode.Alpha0 , notes[27]);
	MyPlay(KeyCode.P , notes[28]);
	MyPlay(KeyCode.LeftBracket , notes[29]);
	MyPlay(KeyCode.Equals , notes[30]);
	MyPlay(KeyCode.RightBracket , notes[31]);

/*	if (Input.GetKeyDown(KeyCode.Z)) {
		notes[0].audio.Stop();
		notes[0].audio.volume = 0;
		notes[0].audio.Play(); 
	}
	else if (Input.GetKey(KeyCode.Z)) {
		notes[0].audio.volume += 10*Time.deltaTime;
	}
	else {
		notes[0].audio.volume -= 0.5*Time.deltaTime;
		if (notes[0].audio.volume == 0) notes[0].audio.Stop();
	}*/
	

}

function MyPlay (mykey1 : KeyCode , mykey2 : KeyCode , myPlayer : GameObject) {

	if ((Input.GetKeyDown(mykey1))||(Input.GetKeyDown(mykey2))) {
		myPlayer.audio.Stop();
		myPlayer.audio.volume = 0;
		myPlayer.audio.Play(); 
	}
	else if ((Input.GetKey(mykey1))||(Input.GetKey(mykey2))) {
		myPlayer.audio.volume += 10*Time.deltaTime;
	}
	else {
		myPlayer.audio.volume -= 0.5*Time.deltaTime;
		if (myPlayer.audio.volume == 0) myPlayer.audio.Stop();
	}

}

function MyPlay (mykey : KeyCode , myPlayer : GameObject) {

	if (Input.GetKeyDown(mykey)) {
		myPlayer.audio.Stop();
		myPlayer.audio.volume = 0.1;
		myPlayer.audio.Play(); 
	}
	else if (Input.GetKey(mykey)) {
		myPlayer.audio.volume += 10*Time.deltaTime;
	}
	else {
		myPlayer.audio.volume -= 0.5*Time.deltaTime;
		if (myPlayer.audio.volume == 0) myPlayer.audio.Stop();
	}

}

