var canvas = document.getElementById("mycanvas")
var context = canvas.getContext("2d")
var color = "saffron"
  context.lineWidth = 3
  context.beginPath();
  context.strokeStyle = color;
  context.rect(150, 143, 430, 200);
  context.stroke();
console.log("Olympic logo starts");
  context.beginPath();
  context.strokeStyle = "blue";
  context.arc(250, 210, 40, 0, 2*Math.PI);
  context.stroke();
  
  context.beginPath();
  context.strokeStyle = "orange";
  context.arc(310, 240, 40, 0, 2*Math.PI);
  context.stroke();

  context.beginPath();
  context.strokeStyle = "indigo";
  context.arc(370, 210, 40, 0, 2*Math.PI);
  context.stroke();
  
  context.beginPath();
  context.strokeStyle = "cyan";
  context.arc(430, 240, 40, 0, 2*Math.PI);
  context.stroke();

  context.beginPath();
  context.strokeStyle = "black";
  context.arc(490, 210, 40, 0, 2*Math.PI);
  context.stroke();
  console.log("finished");
  


  
  
  
    

