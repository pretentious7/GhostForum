var peer = new Peer({key: 'lwjd5qra8257b9'});
let id;

peer.on('open', function(id) {
	console.log('My peer ID is: ' + id);
	return id
var db = firebase.firestore();
db.collection("peerjs_ids").add({
	id: id 
});

console.log('HW');
