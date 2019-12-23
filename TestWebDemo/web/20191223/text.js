function text() {
    //获得实心文字
    var canvas = document.getElementById('text');
    var ctx = canvas.getContext('2d');
    ctx.font="30px Arial";
    ctx.fillText("Hello World",10,50);
}