//get peer 1 from signalling serv, actually fuck firebase. im just going to hardcode a peer 1.
//so this code here gets path and makes new forum with that path in firebase.

//if(typeof localStorage.getItem("peerid") !== 'undefined'){
//	peer = new Peer(localStorage.getItem("peerid"));
////	peer = new Peer();
//}
//else{
//	peer = new Peer();
//}

console.log(peer);
peer.on('connection', function(conn){
	conner = conn;
	conn.on('open', function() {
		ConnectionNotifOk();
		console.log('communism');
		sendMessage();//sends as soon as connected
		//conn.send('hello');
		conn.on('data', function(data){
			console.log('communism part 2');
			console.log('Received', data);
			data = JSON.parse(data);
			if(!ArrIncludes(initStringObj.init, data)){
				//initStringProxy.init = data;
				ArrExpand(initStringObj.init, data); 
				initStringProxy.init = initStringObj.init;
				console.log(initStringObj.init);
			}
		});
		//sets button to refresh when conn closes	
		conn.on('close', () => {ConnectionNotifRefresh()});
		
	});
	
});
peer.on('open', function(id){
	console.log('My peer ID is: ' + id);
	localStorage.setItem('peerid', id);
	currentForum.metaData.myPeerId = id;
	localStorage.setItem('peerId'+forumName, id);

	idDoc.GetData(function(data){
		peeridno = data;
		connection= peer.connect(peeridno.id);
		console.log(connection);
		connection.on('open', function(){
			console.log('thisisboi');
			ConnectionNotifOk(); //changes button to green tick
			sendMessage(); //sends as soon as connected
			connection.on('data', function(data){
				data = JSON.parse(data);
				console.log('Received',data);
				if(!ArrIncludes(initStringObj.init, data)){
					//initStringProxy.init = data;
					ArrExpand(initStringObj.init, data); 
					initStringProxy.init = initStringObj.init;
					console.log(initStringObj.init);
				}
			});
			//sets button to refresh when connection closes.
			connection.on('close', () => {ConnectionNotifRefresh()});
		});

		idDoc.SetData({id : id});
		});
	
});


//conner.on(close) if connection shut indicator on
//connection.on(close) if conner shut indicator on
//and in both connection.ons I need an indicate() func.
