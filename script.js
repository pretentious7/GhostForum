var peer = new Peer({key: 'lwjd5qra8257b9'});
var db = firebase.firestore();
let id;
var pastid = db.collection("peerjs_ids").doc("id_n");
var pastpeerid;
pastid.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
	pastpeerid = doc.data().id;
	console.log(pastpeerid);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
//df
peer.on('open', function(id) {
	console.log('My peer ID is: ' + id);
	db.collection("peerjs_ids").doc("id_n-1").set({ id: pastpeerid });
	db.collection("peerjs_ids").doc("id_n").set({
	id: id 
});
	return id
});


console.log('HW');

var docRef = db.collection("peerjs_ids").doc("id_n");
var peerid;

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data cha:", doc.data());
	peerid = doc.data().id;
	communicator();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

document.getElementById("butt").onclick(communicator());
function communicator(){

var conn = peer.connect(String(peerid));
console.log(conn);
//var conn = peer.connect("q2uh5qbgjnc00000");

conn.on('open', function() {
  // Receive messages
  conn.on('data', function(data) {
    console.log('Received', data);
  });

  console.log("hurray");
  // Send messages
  conn.send('Hello!');
  conn.send(initString);
  //document.getElementById("butt").onclick(conn.send(initString));
});

peer.on('connection', function(comm){
	console.log("connected to" + comm.peer);
	comm.on('data', function(data){
		console.log('received', data);})
	comm.on('open', function() {
	  // Receive messages
	  console.log('confirmedbachelor');
	  comm.on('data', function(data) {
	    console.log('Received', data);
	    if(Array.isArray(data)){console.log("whoms"); initString = data; receiveText()}
	  });

	  // Send messages
	  comm.send('Hello!');
});

});}
	comm.on('open', function() {
	  // Receive messages
	  console.log('confirmedbachelor');
	  comm.on('data', function(data) {
	    console.log('Received', data);
	  });
	  
	  // Send messages
	  comm.send('Hello!');
});
