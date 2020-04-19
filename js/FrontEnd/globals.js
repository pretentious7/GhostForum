//so this thing will run in the beginning and prep variables from GhostForum in localstorage.

//should I write a callback func called ifdef?
function ifNotNull(subject, trueCallBack, falseCallBack){
	//calls callback if subject defined.
	//returns true if subject defined, else false
	//put this in a promise so I can chain then and make it useful.
	if(subject !== null){	
		trueCallBack;
		return true;
	}
	else{
		falseCallBack;
		return false;
	}
}

var pathname = window.location.pathname;
console.log(String(pathname));
//function to check if array contains another array
let ArrIncludes = (arr, target) => target.every(v => arr.includes(v));
//function to expand array with everything not in it from other array.
let ArrExpand = (arr, target) => target.forEach(v => {if(!arr.includes(v)) arr.unshift(v)})

var db = firebase.firestore();
//var idDoc = new FirebaseDoc("peerjs_ids", "id_n", db);
//var idDoc = new FirebaseDoc(String(pathname),"id_n", db);
//var currentForum = new Forum(idDoc);
var forumName = String(pathname).substr(1);
let peer;
let peerId;
if(localStorage.getItem('peerId'+forumName) !== null){
	//peerId written on peer open!
		peerId = localStorage.getItem('peerId'+forumName);
		peer = new Peer(peerId,{
		  config: {'iceServers': [
		    { urls: 'stun:stun.l.google.com:19302' },
		    { urls: 'turn:104.154.36.60:3478', username: 'ghostTurner', credential: 'tisbutascratch'}
		  ], 'sdpSemantics': 'unified-plan'} 
		});
}
else{
	peer = new Peer([] , {
		  config: {'iceServers': [
		    { urls: 'stun:stun.l.google.com:19302' },
		    { urls: 'turn:104.154.36.60:3478', username: 'ghostTurner', credential: 'tisbutascratch'}
		  ], 'sdpSemantics': 'unified-plan'} 
		});
}
var conner;
var connection;
//so now get it to pull previous peer

//this opens new peer for current peer
//var peer = new Peer({key: 'lwjd5qra8257b9'});
let GhostForum;
if(localStorage.getItem('GhostForum') !== null){	
	GhostForum = localStorage.getItem('GhostForum');
}
else{
	GhostForum = {
		fora : {}
	}
}
if(GhostForum.fora.hasOwnProperty(forumName)){
//	currentForum = GhostForum.fora[forumName];
//	idDoc = currentForum.metaData.signalDoc; 
//	peerId = currentForum.metaData.myPeerId;
//	peer = new Peer(peerId);
}
else{
	idDoc = new FirebaseDoc(forumName,"id_n", db);
	GhostForum.fora[forumName] = new Forum(idDoc);
//	peer = new Peer(peerId);
}
