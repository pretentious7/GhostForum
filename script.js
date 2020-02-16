var peer = new Peer({key: 'lwjd5qra8257b9'});
let id;

peer.on('open', function(id) {
	console.log('My peer ID is: ' + id);
	return id
});

console.log('HW');
