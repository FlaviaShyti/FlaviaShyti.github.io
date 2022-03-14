var canvas=document.getElementById("myCanvas");
var context=canvas.getContext("2d");
function changeCanvasColor(){
    context.fillStyle="cyan";
    context.fillRect(0,0,canvas.width,canvas.height);
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
          //context.fill();

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
      //context.beginPath();
      //context.moveTo(0, 400);
      //context.lineTo(10, 400);
      //context.lineTo(5, 350);
      //context.fill();
      startX=0;
      startY=400;
      //context.beginPath();
      //context.moveTo(startX,startY);
      for(let i=0;i<100;i++){
          context.beginPath();
          context.moveTo(startX, startY);
          context.lineTo(startX+=5, startY);
          context.lineTo(startX-5, startY-50);
          context.fill();
      }
  }

  changeCanvasColor();
  drawSun();
  drawCloud();
  drawCaption();
  drawGrass();