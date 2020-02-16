
function generateDOM() {
    let divide = []
    let pageTitle = 'CEWITs Funky Forum'
    let populateText = ['GhostForum', pageTitle, 'Boi']

    for (i = 0; i < 3; i++) {
        divide[i] = document.createElement('div')
        divide[i].id = "title" + i
        divide[i].innerHTML = populateText[i]
        document.body.append(divide[i])
    }
    localStorage.clear()
    receiveText()
    pushPost()
    updateFeed()
}

let initString = ['CHADLEY|Hello World!|0|yoooo', 'ABHISHEK|TWO|18|asdfasdf', 'OJ|BOI|24|asdfhc']
let receiveShit = [];
let cycles;
function receiveText() {
    for (var i = 0; i < initString.length; i++) {
        receiveShit[i] = initString[i].split("|")
        for(j=0;j<4;j++){
            localStorage.setItem('pos'+ eval(4*i+j), JSON.stringify(receiveShit[i][j]))
            cycles = 4*i+j
        }
    }
    console.log(receiveShit)
}

function pushPost() {
    var x = document.createElement("FORM");
    x.setAttribute("id", "posting");
    x.setAttribute("onsubmit", "storePost()")
    document.body.appendChild(x);
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("value", "Type a message!");
    document.getElementById("posting").appendChild(y);
    var z = document.createElement("INPUT");
    z.setAttribute("id", "butt")
    z.setAttribute("type", "submit");
    z.setAttribute("value", "Post!");
    document.getElementById("posting").appendChild(z);
    $('input:text').focus(
        function () {
            $(this).val('');
        });
}

let selfPost = []
function storePost() {
    console.log('submitted')
    localStorage.setItem('response', 'Hello')
}

function updateFeed() {
    let posts = []
    let counter = []
    let postContain = document.createElement("div")
    let postText = []
    postContain.id = "postContainer"
    document.body.append(postContain)
    for(i=0; i<cycles; i++){
        postText[i] = JSON.parse(localStorage.getItem("pos"+i)) 
        counter++
    }
    for(x=0; x<=cycles/4; x++){
        console.log(x)
    }
    for (i = 0; i <= cycles; i++) {
            posts[i] = document.createElement('div')
            posts[i].id = "text" + i
            posts[i].innerHTML = postText[i]
            document.getElementById("postContainer").appendChild(posts[i]);
        }
}

function dateCalc() {
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();
    var dateString = date + "-" + (month + 1) + "-" + year;
    return dateString;
}