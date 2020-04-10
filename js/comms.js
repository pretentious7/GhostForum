function SendData(DataObject, Connection){
	//function to SEND forum array from current peer to next peer (stored in peer ID)
	//Uses peerjs api's (basically copied from documentation examples
	//possible improvements with promises and callbacks?

	Connection.send(DataObject);
	
}

function ReceiveData(Connection){
	//function to RECEIVE forum array from specified connection
	//Uses peerjs api's (basically copied from documentation examples)
	//possible improvements with promises and callbacks?

	Connection.on('data', function(){
		DataObject = Data;
		console.log('DataObject is assigned');
	});
	return DataObject;
}

function NewPeerConnection(peerid){
	//opens a new peer connection, not sure how much of this peerjs autohandles 
	//intended behaviour is for opened connection to be maintained when site open to reduce connection lag.


	var peer = new Peer();

	var conn = peer.connect(peerid);

	peer.on('connection', function(conn){
		console.log("connected to" + conn.peer);
		conn.on('open', function(){
			//this has the FORUM as a global variable, not sure if that's best.
			SendData(FORUM, conn);
		});

	});
	//have some way to account for error in return here.
}

