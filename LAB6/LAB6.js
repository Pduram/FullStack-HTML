let canvas = document.getElementById('ret');
let ctx = canvas.getContext('2d');

let retangulo = {
    x: 50,
    y: 10,
    altura: 10,
    largura: 50,
    cor: "blue",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}


let retangulo2 = {
    x: 50,
    y: 100,
    altura: 10,
    largura: 50,
    cor: "red",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}


var circulo = {
    x:0,
    y:0,
    raio: 50,
    cor:"yellow",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.arc(this.x,this.y,this.raio,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

var bola={
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'uno henrique.jpg';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x-bola.raio, this.y-bola.raio, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}


let direcao = 1
function animar(){
    ctx.clearRect(0,0,400,400);
    if (retangulo.x >350){
        direcao=-5
    }
    if (retangulo.x <50
    ){
        direcao=5
    }
    
    retangulo.x = retangulo.x + direcao;
    retangulo2.altura = retangulo2.altura + direcao;
    retangulo2.largura = retangulo2.largura + direcao;
    retangulo.desenha();
    retangulo2.desenha();
    circulo.desenha();
    bola.desenha();
    requestAnimationFrame(animar);
}
animar()

document.addEventListener('keydown',function(evento){
    tecla = evento.key;
    console.log(tecla);
    if(tecla == 'ArrowUp')   {circulo.y = circulo.y-4}  
    if(tecla == 'ArrowDown') {circulo.y = circulo.y+4}  
    if(tecla == 'ArrowLeft') {circulo.x = circulo.x-4}  
    if(tecla == 'ArrowRight'){circulo.x = circulo.x+4}  
})
document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);


    if(x_mouse>0+bola.raio && x_mouse<400-bola.raio && y_mouse>0+bola.raio && y_mouse<400-bola.raio){
        bola.x = x_mouse;
        bola.y = y_mouse;
    }
    else{
        bola.x = bola.x;
        bola.y = bola.y;
    }
})

