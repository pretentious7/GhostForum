let initString = ['CHADLEY|Hello World!|REPLIES 0|yoooo', 'ABHISHEK|TWO|REPLIES 18|asdfasdf', 'OJ|BOI|REPLIES 24|asdfhc', 'OJJJ|BBBBBBBBB|REPLIES 24|HHHHHHHH']
let receiveShit = [];
let cycles;
let selfPost = []

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
    localStorage.clear()
    receiveText()
    pushPost()
    updateFeed()
}

function receiveText() {
    for (var i = 0; i < initString.length; i++) {
        receiveShit[i] = initString[i].split("|")
        for (j = 0; j < 4; j++) {
            localStorage.setItem('pos' + eval(4 * i + j), JSON.stringify(receiveShit[i][j]))
            cycles = 4 * i + j
        }
    }
}

function pushPost() {
    var x = document.createElement("FORM");
    x.setAttribute("id", "posting");
    x.setAttribute("onsubmit", "return storePost()")
    document.body.appendChild(x);
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("value", "Your name#Your message");
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

function storePost() {
    console.log('submitted')
    localStorage.setItem('response', 'Hello')
}

function updateFeed() {
    let posts = []
    let postContain = []
    let postText = []

    for (i = 0; i < cycles; i++) {
        postText[i] = JSON.parse(localStorage.getItem("pos" + i))
    }
    for (x = 0; x <= cycles / 4; x++) {
        postContain[i] = document.createElement('div')
        postContain[i].id = "postContainer"+x
        postContain[i].setAttribute("style", "margin-left: 25%; padding: 1em; width: 46%; border: solid; border-radius: 5px ;margin-bottom: 0.25em")
        document.body.append(postContain[i])
        for (i = 4*x; i < 4*x+4; i++) {
            posts[i] = document.createElement('div')
            posts[i].id = "text" + eval(i%4)
            posts[i].innerHTML = postText[i]
            document.getElementById("postContainer"+x).appendChild(posts[i]);   
            console.log(i%4)
        }
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