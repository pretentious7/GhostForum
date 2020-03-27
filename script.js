var db = firebase.firestore();
let id;
var pastid = db.collection("peerjs_ids").doc("id_n");
var peer = new Peer({key: 'lwjd5qra8257b9'});
function past_id_getter(){
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
return pastpeerid;}
//df
peer.on('open', function(id) {
	console.log('My peer ID is: ' + id);
	console.log('pastpeerid' + past_id_getter());
	db.collection("peerjs_ids").doc("id_n-1").set({ id: past_id_getter() });
	db.collection("peerjs_ids").doc("id_n").set({
	id: id 
});
	var peerid = past_id_getter();
	return id
});


console.log('HW');

var docRef = db.collection("peerjs_ids").doc("id_n-1");
var peerid;

//this block here just takes the connector peer id into peerid
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data cha:", doc.data());
	peerid = doc.data().id;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


var conn = peer.connect(peerid);
conn.send('hello')
conn.on('data', function(data){
	console.log(data);
}
);
