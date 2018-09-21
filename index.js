var mains = document.querySelector("main");
var lastX , lastY = null;
mousePressed = false;

control.style.cursor = "pointer";
control.addEventListener("click", function () {
    if (mains.style.display != "none")
        mains.style.display = "none";
    else
        mains.style.display = "block";

})

/* mains.addEventListener("mousemove", function(e){
    this.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY +",200)"
}) */

canvas = document.getElementById('canvas');
ctx = canvas.getContext("2d");
ctx.font = '48px serif';

canvas.addEventListener("mousedown", function(e) {
    mousePressed = true;
})

canvas.addEventListener("mouseup", function(e) {
    mousePressed = false;
})

canvas.addEventListener("mousemove", function (e) {
    if ( mousePressed) {
        Draw(e);
        //ctx.fillText('.', e.offsetX, e.offsetY);
    }
    lastX = e.offsetX ; lastY = e.offsetY;

})


function Draw(e) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = "black";
    ctx.lineJoin = "round";
    ctx.lineWidth = 10;
    ctx.closePath();
    ctx.stroke();                           // doing context.stroke later gives a consistent stroke with no gaps.

}
  //ctx.addEventListener("click", function(){console.log("clicked")})
