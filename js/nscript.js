//get peer 1 from signalling serv, actually fuck firebase. im just going to hardcode a peer 1.
//so this code here gets path and makes new forum with that path in firebase.
var pathname = window.location.pathname;
console.log(String(pathname));
//function to check if array contains another array
let ArrIncludes = (arr, target) => target.every(v => arr.includes(v));
//function to expand array with everything not in it from other array.
let ArrExpand = (arr, target) => target.forEach(v => {if(!arr.includes(v)) arr.unshift(v)})

var db = firebase.firestore();
//var idDoc = new FirebaseDoc("peerjs_ids", "id_n", db);
var idDoc = new FirebaseDoc(String(pathname),"id_n", db);
var peeridno;
var conner;
var connection;
console.log(idDoc);
//so now get it to pull previous peer

//this opens new peer for current peer
//var peer = new Peer({key: 'lwjd5qra8257b9'});
let peer;
if(typeof localStorage.getItem("peerid") !== 'undefined'){
	peer = new Peer(localStorage.getItem("peerid"));
//	peer = new Peer();
}
else{
	peer = new Peer();
}

console.log(peer);
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
	localStorage.setItem('peerid', id);
	idDoc.GetData(function(data){
		peeridno = data;
		connection= peer.connect(peeridno.id);
		console.log(connection);
		connection.on('open', function(){
			console.log('thisisboi');
			connection.on('data', function(data){
				console.log('Received',data);
				if(!ArrIncludes(initStringObj.init, data)){
					//initStringProxy.init = data;
					ArrExpand(initStringObj.init, data); 
					initStringProxy.init = initStringObj.init;
					console.log(initStringObj.init);
				}
			});
		});

		idDoc.SetData({id : id});
		});
	
});

