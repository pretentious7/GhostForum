//get peer 1 from signalling serv, actually fuck firebase. im just going to hardcode a peer 1.

class FirebaseDoc {
	constructor(docId,CollectionId,db ){
		this.docId = docId;
		this.CollectionId = CollectionId;
		this.db = db;
		this.docad = db.collection(docId).doc(CollectionId);//try renaming docad here
	}	
	
	GetData(callback){
		var data;
		this.docad.get().then(function(doc) {
		    if (doc.exists) {
			console.log("Document data:", doc.data());
			callback(doc.data());
			return
		    } else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		    }
		}).catch(function(error) {
		    console.log("Error getting document:", error);
		});
	}
	
	SetData(data){
		//should this be in a kinda promise structure?
		this.docad.set(data); // for this thing, it's {id: peer_id} 
		
	}
}

		
	
var db = firebase.firestore();
var idDoc = new FirebaseDoc("peerjs_ids", "id_n", db);
var peeridno;
var connection;

//so now get it to pull previous peer

//this opens new peer for current peer
var peer = new Peer({key: 'lwjd5qra8257b9'});
peer.on('open', function(id){
	console.log('My peer ID is: ' + id);
	idDoc.GetData(function(data){
		peeridno = data
		connection = peer.connect(peeridno.id);
		idDoc.SetData({id : id});
		});
	
});

peer.on('connection', function(conn){
	conn.on('open', function() {
		console.log('communism');
		conn.on('data', function(data){
			console.log('Received', data);
		});
	});
	
	conn.send('hello')
});
