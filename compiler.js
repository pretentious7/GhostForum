// let initString = ['HOW|I|THIS|WORKING', 'CHADLEY|Hello World!|REPLIES 0|yoooo', 'ABHISHEK|TWO|REPLIES 18|asdfasdf', 'OJ|BOI|REPLIES 24|asdfhc', 'OJJJ|BBBBBBBBB|REPLIES 24|HHHHHHHH']

let postObj
let initString;
if (localStorage.getItem('initString') !== null) {
    initString = localStorage.getItem('initString').split(',');
}
else initString = ['Made with Love | By Ojasvin Kirpane & Abhishek Cherath | 4:20'];
//initString = ['How|I|this|work'];

console.log(initString);
var initStringObj = { init: initString };
let receiveShit = [];
let cycles;
let selfPost = []

//so this proxy thing listens for changes in initstring and rebroadcasts over serialnet.
var initStringProxy = new Proxy(initStringObj, {
    set: function (target, key, value) {
        target[key] = value;
        console.log('sweet dreams', initStringObj.init);
        sendMessage();
        //receiveText();
        arbitraryStorePost();
        //updateFeed(); 
        return true;
    }
});


function generateDOM() {
    let divide = []
    let pageTitle = 'CEWITs Funky Forum'
    let populateText = ['GhostForum', pageTitle, 'Type your message in the following format:']

    for (i = 0; i < 3; i++) {
        divide[i] = document.createElement('div')
        divide[i].id = "title" + i
        divide[i].innerHTML = populateText[i]
        document.body.append(divide[i])
    }
    //localStorage.clear()
    receiveText()
    pushPost()
    updateFeed()
}

function receiveText() {
    for (var i = 0; i < initStringObj.init.length; i++) {
        receiveShit[i] = initStringObj.init[i].split("|")
        for (j = 0; j < 3; j++) {
            //localStorage.setItem('pos' + eval(4 * i + j), JSON.stringify(receiveShit[i][j]))
            localStorage.setItem('pos' + eval(3 * i + j), receiveShit[i][j])
            cycles = 3 * i + j
        }
    }
    //cycles = 4*initString.length+3;
}



function pushPost() {

    var a = document.createElement("FORM")
    a.setAttribute("id", "username")
    a.setAttribute("onsubmit", "return false")
    document.body.appendChild(a)

    var b = document.createElement("INPUT")
    b.setAttribute("type", "text")
    b.setAttribute("value", "Your Username")
    b.setAttribute("id", "usernameInput");
    document.body.appendChild(b)

    b.setAttribute("style", "margin-left: 25%; padding: 1em; width: 30%; margin-bottom: 1em; border:none; border-bottom: 1px solid black; background-color: #FFFDF5; height: 13px")

    var x = document.createElement("FORM");
    x.setAttribute("id", "posting");
    x.setAttribute("onsubmit", "return false")
    document.body.appendChild(x);
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("value", "Your message");
    y.setAttribute("id", "userInput");
    document.getElementById("posting").appendChild(y);
    var z = document.createElement("INPUT");
    z.setAttribute("id", "butt")
    z.setAttribute("type", "submit");
    z.setAttribute("onclick", "storePost(); sendMessage();") //communicator sends. so peer.send here.
    z.setAttribute("value", "Post!");
    document.getElementById("posting").appendChild(z);
    $('input:text').click(
        function () {
            $(this).val('');
        });
    if (typeof (conn) !== 'undefined') {
        conn.send(initString);
    }
}
function postConstruct(u, i){
	let transID = Math.floor(Math.random()*16777215).toString(16);
	let roomID = Math.floor(Math.random()*16777215).toString(16);
	var post = {
		origin_server_ts: '',
		sender: '@' + u + ':ghostforum.tech',
		unsigned: {
			age: 'x',
			transaction_id: transID
		},
		content: {
			body: i,
			msgtype: 'm.text'
		},
		type: 'm.room.message',
		room_id: 'communism'+roomID //put page title (from url) here
	}
    postObj = JSON.stringify(post);
    //console.log(postObj)
}

function storePost() {
    localStorage.setItem('response', 'Hello')
    var un = document.getElementById('usernameInput').value
    var input = document.getElementById('userInput').value;
    input2 = un + '|' + input + '|' + dateCalc()
    initStringObj.init.unshift(input2)
    console.log(input2)
    console.log(initString)
    receiveText()
    document.getElementById("container").innerHTML = "";
    updateFeed()
    postConstruct(un,input)
    console.log(postObj)
}

function arbitraryStorePost() {
    receiveText()
    document.getElementById("container").innerHTML = "";
    updateFeed()
}

function updateFeed() {
    let posts = []
    let postContain = []
    let postText = []
    var container = document.createElement('div')
    container.id = 'container'
    document.body.append(container)

    for (i = 0; i < cycles; i++) {
        //postText[i] = JSON.parse(localStorage.getItem("pos" + i))
        postText[i] = localStorage.getItem("pos" + i)
    }
    for (x = 0; x <= cycles / 3; x++) {
        postContain[i] = document.createElement('div')
        postContain[i].id = "postContainer" + x
        postContain[i].className = "remove"
        postContain[i].setAttribute("style", "margin-left: 25%; padding: 1em; width: 46%; border: solid; border-radius: 5px ;margin-bottom: 0.25em")
        document.getElementById("container").append(postContain[i])
        for (i = 3 * x; i < 3 * x + 3; i++) {
            posts[i] = document.createElement('div')
            posts[i].id = "text" + eval(i % 3)
            posts[i].innerHTML = postText[i]
            document.getElementById("postContainer" + x).appendChild(posts[i]);
        }
    }
    //stores for future instance in localstorage everythin
    localStorage.setItem('initString', initStringObj.init);
}

function dateCalc() {
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();
    var dateString = date + "-" + (month + 1) + "-" + year;
    return dateString;
}

function sendMessage() {
    if (typeof conner !== 'undefined') {
        conner.send(initStringObj.init);
    }
    if (typeof connection !== 'undefined') {
        connection.send(initStringObj.init);
    }

}


