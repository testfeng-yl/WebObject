function draw() {
    //填充三角形
    var canvas = document.getElementById('triangle');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(50, 60);
    ctx.lineTo(100, 50);
    ctx.lineTo(100, 25);
    ctx.fill();

    //描边三角形
    ctx.beginPath();
    ctx.moveTo(125,125);
    ctx.lineTo(125,45);
    ctx.lineTo(45,125);
    ctx.closePath();
    ctx.stroke();
    //绘制一个圆形

    ctx.beginPath();
    ctx.arc(95,50,100,0,2*Math.PI);
    ctx.stroke();

}

