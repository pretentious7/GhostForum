//file written with implicitly assumed db somewhere in myApp of form db = firebase.firestore()

class FirebaseDoc {
	constructor(docId,CollectionId,db){
		this.docId = docId;
		this.CollectionId = CollectionId;
		this.db = db;
		this.docad = db.collection(CollectionId).doc(docId); //try renaming docad here
	}	
	
	function GetData(){
		docad.get().then(function(doc) {
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
	
	function SetData(data){
		//should this be in a kinda promise structure?
		docad.set(data); // for this thing, it's {id: peer_id} 
		
	}
}

		
	
