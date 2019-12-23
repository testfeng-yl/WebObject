function crad() {
    var ctx=document.getElementById("gradient").getContext("2d");
    var lineGrad=ctx.createLinearGradient(0,0,0,150);//创建线条渐变
    lineGrad.addColorStop(0,"#FF0000");
    lineGrad.addColorStop(0.5,"#fff");
    lineGrad.addColorStop(0.5,"#00ABEB");
    lineGrad.addColorStop(1,"#fff");

    ctx.fillStyle=lineGrad;
    ctx.fillRect(10,10,130,130);

}