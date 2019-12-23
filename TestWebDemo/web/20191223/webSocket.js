function socket() {
    if ("WebSocket" in window){
        alert("您的浏览器支持 WebSocket!");
        //打开一个web socket
        var ws=new WebSocket("ws://localhost:9998/echo");
        ws.onopen=function () {
            //Web Socket 已经连接上,使用send()方法发送数据
             ws.send("发送数据");
            alert("数据发送中....")
        };
        ws.onmessage=function (evt) { //为什么参数传evt
            var received_msg=evt.data;
            alert("数据已经接受...")
        };
        ws.onclose=function () {
        //关闭websocket
            alert("连接关闭...")
        };
        }
    else{
        alert("您的浏览器不支持 webSocket!")
    }

}