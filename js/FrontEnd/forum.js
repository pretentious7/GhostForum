//{
//  ...
//  "type": "m.room.message",
//  "content": {
//    "msgtype": "m.text",
//    "body": "<body including fallback>",
//    "format": "org.matrix.custom.html",
//    "formatted_body": "<HTML including fallback>",
//    "m.relates_to": {
//      "m.in_reply_to": {
//        "event_id": "$another:event.com"
//      }
//    }
//  }
//}

var GhostForum = {
	fora : []
};
			
let IncludesForum = (forum) => GhostForum.fora.some(v => v.myPeerId === forum.myPeerId);

class Forum {
	constructor(signalDoc){
		this.metaData = {
			myPeerId : '',
			peersPeerIds : [],
			signalDoc : signalDoc
		};

		this.data = {
			posts :  []
		};
	}

	toString(){
		return JSON.stringify(this);
	}
}

function postConstruct(u, i){
	//u is username, i is content object (insides)
	let transID = Math.floor(Math.random()*16777215).toString(16);
	let roomID = Math.floor(Math.random()*16777215).toString(16);
	var postObj = {
			origin_server_ts: '',
			sender: '@' + u + ':ghostforum.tech',
			unsigned: {
				age: 'x',
				transaction_id: transID
						},
			content: {
				body: String(i),
				msgtype: 'm.text'
						},
			type: 'm.room.message',
			room_id: String(window.location.pathname)+roomID //put page title (from url) here
			}
	//postObj = JSON.stringify(post);
	//console.log(postObj)
	return postObj;
}

class Post{
	constructor(username,innards){
		this.content = postConstruct(username, innards);
		this.parents = []; //array of parents of post
		this.children = [];//array of children of post
	}	

	addChild(childPost){
		this.children.push(childPost);
	}

	addParent(parentPost){
		this.parents.push(parentPost);
	}
	
	toString(){
		return JSON.stringify(this);
	}
}
