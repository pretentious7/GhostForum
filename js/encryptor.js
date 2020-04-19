var message = 'amit';  
var key= 'abc123XYZ';
var encrypted = CryptoJS.AES.encrypt(message, key);  

function EncryptForum(forum,key){
	return CryptoJS.AES.encrypt(forum,key).toString();
}

function DecryptForum(forum,key){
	console.log(CryptoJS.AES.decrypt(forum,key).toString(CryptoJS.enc.Utf8));
	return CryptoJS.AES.decrypt(forum,key).toString(CryptoJS.enc.Utf8);
}


function stringToHash(string) { 
	//have to learn how this works.

	var hash = 0; 

	if (string.length == 0) return hash; 

	for (i = 0; i < string.length; i++) { 
		char = string.charCodeAt(i); 
		hash = ((hash << 5) - hash) + char; 
		hash = hash & hash; 
	} 

	return hash; 
} 

console.log('forumhash', stringToHash(forumName));
var forumHash = String(stringToHash(forumName));
