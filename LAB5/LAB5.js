let canvas = document.getElementById('square');
let ctx = canvas.getContext('2d');

//solzinho
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(360,106,50,0*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();

//asfaltinho
ctx.beginPath();
ctx.fillStyle = 'gray';
ctx.fillRect(0,330,600,250);
ctx.closePath();

//casinha
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(190,240,90,90);
ctx.closePath();

//telhadinho
ctx.beginPath();
ctx.fillStyle = 'rgb(226, 114, 91)';
ctx.moveTo(190,240);
ctx.lineTo(280,240);
ctx.lineTo(235,200);
ctx.lineTo(190,240);
ctx.fill();
ctx.closePath();

//janelinhas
ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.fillRect(197,260,30,30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.fillRect(243,260,30,30);
ctx.closePath();

//portinha
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(227,290,17,40);
ctx.closePath();

//arvorezinhas
    //tronquinhos
    //1
    ctx.beginPath();
    ctx.fillStyle = 'rgba(167, 57, 36, 1)';
    ctx.fillRect(60,285,20,45);
    ctx.closePath();
    //2
    ctx.beginPath();
    ctx.fillStyle = 'rgba(167, 57, 36, 1)';
    ctx.fillRect(440,335,20,45);
    ctx.closePath();
    //folhinhas
    //1
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.arc(70,265,25,0*Math.PI,2.5*Math.PI);
    ctx.fill();
    ctx.closePath();
    //2
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.arc(450,315,25,0*Math.PI,2.5*Math.PI);
    ctx.fill();
    ctx.closePath();

//aguinha
//scir
ctx.beginPath();
ctx.fillStyle = 'rgba(0, 131, 192, 1)';
ctx.arc(0,330,65,1*Math.PI,0*Math.PI);
ctx.fill();
ctx.closePath();
//ret
ctx.beginPath();
ctx.fillStyle = 'rgba(0, 131, 192, 1)';
ctx.fillRect(0,330,65,1300);
ctx.closePath();
//scir
ctx.beginPath();
ctx.fillStyle = 'rgba(0, 131, 192, 1)';
ctx.arc(190,500,90,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();
//ret
ctx.beginPath();
ctx.fillStyle = 'rgba(0, 131, 192, 1)';
ctx.fillRect(0,410,190,150);
ctx.closePath();