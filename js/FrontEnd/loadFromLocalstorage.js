//so this thing will run in the beginning and prep variables from GhostForum in localstorage.

//should I write a callback func called ifdef?
function ifdef(subject, trueCallBack, falseCallBack){
	//calls callback if subject defined.
	//returns true if subject defined, else false
	if(typeof subject !== 'undefined'){	
		callback;
		return true;
	}
	else{
		falseCallBack;
		return false;
	}
}

let GhostForum;
ifdef(localStorage.getItem('GhostForum'), () => {
	GhostForum = localStorage.getItem('GhostForum');},
	() => {GhostForum = {
		fora : []
	}});
