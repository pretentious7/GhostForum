//file written with implicitly assumed db somewhere in myApp of form db = firebase.firestore()

class FirebaseDoc {
	constructor(docId,CollectionId,db ){
		this.docId = docId;
		console.log(this.docId);
		this.CollectionId = CollectionId;
		this.db = db;
		this.docad = db.collection(docId).doc(CollectionId);//try renaming docad here
	}	
	
	GetData(){
		this.docad.get().then(function(doc) {
		    if (doc.exists) {
			console.log("Document data:", doc.data());
			return doc.data()
		    } else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		    }
		}).catch(function(error) {
		    console.log("Error getting document:", error);
		});
	}
	
	SetData(data){
		//should this be in a kinda promise structure?
		docad.set(data); // for this thing, it's {id: peer_id} 
		
	}
}

		
	
