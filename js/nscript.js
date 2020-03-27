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

//function to check if array contains another array
let ArrIncludes = (arr, target) => target.every(v => arr.includes(v));
//function to expand array with everything not in it from other array.
let ArrExpand = (arr, target) => target.every(v => {if(!arr.includes(v)) arr.unshift(v)})

var db = firebase.firestore();
var idDoc = new FirebaseDoc("peerjs_ids", "id_n", db);
var peeridno;
var conner;
var connection;

//so now get it to pull previous peer

//this opens new peer for current peer
var peer = new Peer({key: 'lwjd5qra8257b9'});

peer.on('connection', function(conn){
	conner = conn;
	conn.on('open', function() {
		console.log('communism');
		//conn.send('hello');
		conn.on('data', function(data){
			console.log('communism part 2');
			console.log('Received', data);
			if(!ArrIncludes(initStringObj.init, data)){
				//initStringProxy.init = data;
				ArrExpand(initStringObj.init, data); 
				initStringProxy.init = initStringObj.init;
				console.log(initStringObj.init);
			}
		});
		
	});
	
});
peer.on('open', function(id){
	console.log('My peer ID is: ' + id);
	idDoc.GetData(function(data){
		peeridno = data
		connection= peer.connect(peeridno.id);
		connection.on('open', function(){
			console.log('thisisboi');
			connection.on('data', function(data){
				console.log('Received',data);
				if(!ArrIncludes(initStringObj.init, data)){
					//initStringProxy.init = data;
					ArrExpand(initStringProxy.init, data); 
					initStringProxy.init = initStringObj.init;
					console.log(initStringObj.init);
				}
			});
		});

		idDoc.SetData({id : id});
		});
	
});

