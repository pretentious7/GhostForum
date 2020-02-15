var peer = new Peer({key: 'lwjd5qra8257b9'});

peer.on('open', function(id) {
	console.log('My peer ID is: ' + id);
});

console.log('HW');
