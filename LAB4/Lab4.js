let numeroAlet = Math.floor(Math.random()*101);

console.log(numeroAlet);





function gerador(){
    var nr = document.getElementById("nr").value
 
    if (nr==numeroAlet){
        window.alert("CORRETO");
        document.getElementById("bodinho").style.setProperty("background-color", "rgb(0, 255, 0)");
    }else{
        window.alert("ERRADO");
        document.getElementById("bodinho").style.setProperty("background-color", "red");
    }
}