
//conner.on(close) if connection shut indicator on
//connection.on(close) if conner shut indicator on
//and in both connection.ons I need an indicate() func.


function ConnectionNotifRefresh(){
	var connNotif = document.getElementById('imgConnectNotif');
	connNotif.setAttribute("src","./R/Refresh_Icon.svg");
	connNotif.setAttribute("onClick","window.location.reload();");
}

function ConnectionNotifOk(){
	var connNotif = document.getElementById('imgConnectNotif');
	if(typeof conner === 'undefined' && connection.open){
		connNotif.setAttribute("src","./R/Connected_Icon.svg");
		connNotif.setAttribute("onClick","");
	}
	else if(conner.open && connection.open){
		connNotif.setAttribute("src","./R/Connected_Icon.svg");
		connNotif.setAttribute("onClick","");
	}
}
