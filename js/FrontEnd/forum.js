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

class Post {
	constructor(eventID, msgtype, content){
		this.eventID = eventID;
		this.msgtype = msgtype;
		this.content = content
	}


class Forum {
	constructor(signallingDoc){
		this.url = signallingDoc.url;
		this.post 
var Forum = new Object();


