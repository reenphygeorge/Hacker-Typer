
window.onkeydown = function nam() {
    console.log("Hello")
}



var cursor = true;
var speed = 500;
setInterval(() => {
   if(cursor) {
     document.getElementById('cursor').style.opacity = 0;
     cursor = false;
   }else {
     document.getElementById('cursor').style.opacity = 1;
     cursor = true;
   }
}, speed);

var code
var i=0
var j=0

const xhr = new XMLHttpRequest();

xhr.open('GET','mytext.txt', true);

xhr.onload = function() {
    code = this.responseText
    // for(var i=0 ; i<100 ; i++) {
        window.onkeydown = function print() {
            var temp = ''
            while(code[j] != ' ') {
                temp += code[j]
                j++
            }
            j++;
            temp += ' '
            document.getElementById("code").innerHTML += temp;
        // console.log(temp)
            temp = ''
        }
}

xhr.send();