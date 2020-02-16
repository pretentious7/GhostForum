var peer = new Peer({key: 'lwjd5qra8257b9'});
var db = firebase.firestore();
let id;
//df
peer.on('open', function(id) {
	console.log('My peer ID is: ' + id);
	db.collection("peerjs_ids").doc("id_n").set({
	id: id 
});
	return id
});


console.log('HW');

var docRef = db.collection("peerjs_ids").doc("id_n");

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


