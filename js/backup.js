//so this will make new thing called backup in the document
//
//when connect with no peers call backup from doc
//
//when disconnect to no peers set backup.
//
//

var BackupDoc = new FirebaseDoc(forumHash,"backup", db);

function BackupForum(forum){
	if((typeof conner === 'undefined' && !connection.open) || (!conner.open && !connection.open)){
		console.log('forum', forum);
		BackupDoc.UpdateData({backup : EncryptForum(forum,forumName)});
	}
	else console.log('not updated');
}

function GetBackupForum(callback){
	BackupDoc.GetData((data)=>{
		console.log('kissmemylove', DecryptForum(data.backup, forumName));
		callback(DecryptForum(data.backup, forumName));
		return;
	});
}
