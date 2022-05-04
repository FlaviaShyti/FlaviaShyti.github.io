
     const canvas=document.getElementById('hw-1-canvas')
     const context=canvas.getContext('2d')
 

 function changeCanvasColor(){
     context.fillStyle="cyan";
     context.fillRect(0,0,canvas.clientWidth,canvas.height);

 }
 function drawSun(){
    var X=canvas.width/1.11;
    var Y=canvas.height/6;
    var R=30;
    context.beginPath();
    context.fillStyle='#fff700';
    context.arc(X,Y,R,0,2*Math.PI,false);
    context.lineWidth=3;
    context.fill();
}
function drawCloud(){
    var startX=150;
    var startY=0;

    //draw cloud shape
    context.beginPath();
    context.moveTo(startX,startY);
    context.bezierCurveTo(startX - 20, startY + 20, startX - 20, startY + 50, startX + 50, startY + 70);
    context.bezierCurveTo(startX + 80, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
   
    context.bezierCurveTo(startX + 250, startY + 70, startX + 250, startY + 40, startX+250, startY);
    context.closePath();
    //context.bezierCurveTo(startX + 260, startY - 40, startX + 200, startY - 50, startX + 170, startY - 30);
    
    //context.bezierCurveTo(startX + 150, startY - 60, startX + 60, startY - 20, startX + 80, startY - 30);
    //context.bezierCurveTo(startX + 30, startY - 75, startX - 20, startY - 10, startX, startY);
  

    //add a radial gradient
    var grdCenterX=260;
    var grdCenterY=80;
    var grd=context.createRadialGradient(grdCenterX,grdCenterY,10,grdCenterX,grdCenterY,200);
    context.fillStyle="#FFFFFF";
    context.fill();

    //set the line width and stroke color
    context.lineWidth=5;
    context.strokeStyle="#FFFFFF";
    context.stroke();

}
function drawCaption(){
    context.font="25px Arial";
    context.fillStyle="#2664F5";
    context.fillText("Hello World!",10,50);
    
}
function drawGrass(){
    startX=0;
    startY=400;
    for(let i=0;i<150;i++){
        context.fillStyle='green';
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(startX+=5, startY);
        context.lineTo(startX-5, startY-50);
        context.fill();
    }
}

function drawHouse(){
    //roof
    startX=390;
    startY=170;
    var width=210;
    var height=75;
    context.fillStyle='blue';
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(startX+width, startY);
    context.lineTo(startX+(width/2), startY-height);
    context.fill();
    //house
    context.strokeRect(startX,173,width,205);
    context.fillStyle='white';
    context.fillRect(startX,173, width, 205);
    //door
    context.fillStyle='blue';
    context.strokeRect(startX,173, (width/4),180);
    context.fillRect(startX,200, (width/3),180);
    //doorknob
    var R=5;
    context.beginPath();
    context.fillStyle='white';
    context.arc(447,300,R,0,2*Math.PI,false);
    context.lineWidth=3;
    context.fill();
    //window
    context.fillStyle='cyan';
    context.strokeRect(startX+130,200,75,90);
    context.fillRect(startX+130,200, 75,90);

    context.fillStyle='black';
    context.beginPath();
    context.moveTo(startX+130,200);
    context.lineTo(startX+130,280);

}

 changeCanvasColor();
 drawSun();
 drawCloud();
 drawCaption();
 drawGrass();
 drawHouse();
 window.onload=function(){
    var imageOfSprite=new Image();
    var imageOfGround=new Image();
    imageOfSprite.src='file:///C:/Users/Tristan/Documents/GitHub/FlaviaShyti.github.io/sprite.png';
    imageOfGround.src='file:///C:/Users/Tristan/Documents/GitHub/FlaviaShyti.github.io/ground.jpeg';
    imageOfGround.onload=function(){
        fill_canvas(imageOfSprite,imageOfGround);
    }
    function fill_canvas(imageOfSprite,imageOfGround){
        imageOfSprite.width=100;
        imageOfSprite.height=150;

        imageOfGround.width=600;
        imageOfGround.height=20;
        context.drawImage(imageOfSprite, 0,195);
        context.drawImage(imageOfGround,0,380);
    }
}