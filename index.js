var mains = document.querySelector("main");
var lastX , lastY = null;
var fillFlag = false;
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
fillButton = document.getElementById('fill');
canvas = document.getElementById('canvas');
ctx = canvas.getContext("2d");
ctx.font = '48px serif';

canvas.addEventListener("mousedown", function(e) {
    mousePressed = true;
})

canvas.addEventListener("mouseup", function(e) {
    mousePressed = false;
})

/* canvas.addEventListener("click", function(e) {
    (fillFlag)? ctx.fill():null;
}) */

canvas.addEventListener("doubleclick", function(e) {
    ctx.fill();
})

fillButton.addEventListener("click", function(e){
    fillFlag = true;
    ctx.fillStyle = "blue";    
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
    ctx.strokeStyle = colorPicker.value; //"black";
    ctx.lineJoin = "round";
    ctx.lineWidth = brushWidth.value;
    ctx.closePath();
    ctx.stroke();                           // doing context.stroke later gives a consistent stroke with no gaps.
    //ctx.clip();
}
  //ctx.addEventListener("click", function(){console.log("clicked")})
