function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"; 
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por Clicar !");
}

function redirecionar(){
    window.open("https://www.vagas.com.br/");
    //window.location.href = "https://www.vagas.com.br/";
}


function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Repasse o mouve aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*
function soma(n1, n2){
    return n1 + n2;
}

var validar = 0;
function validaIdade(idade){
    if(idade >= 18){
         validar = true;
    } else{
        validar = false
    }  
    return validar;
}

var idade = 18;
var idade = prompt("Qual sua idade ?");
console.log(validaIdade(idade));



/*var d = new Date();
alert(d.getDay());
alert(d.getMonth());*/

/*var count;
for(count = 0; count <= 5; count ++){
    alert(count);
};*/


/*var count = 0;
while (count <= 5){
   console.log(count);
   alert(count);
   count ++;

}*/
/*var idade = prompt("Qual a sua idade: ");

if(idade >= 18){
    alert("Maior de idade...");
} else{
    alert("Menor de idade...");
}
*/


/*var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas.nome);
alert(frutas[1].nome);*/


/*var lista = ["maça", "pera","laranja"];
//lista.pop("uva")
//lista.push("uva")
console.log(lista);
console.log(lista.toString);
console.log(lista.join(" - "));*/



/*var nome = "Beatriz Justo";
var idade = 18;
var idade2 = 22;
var frase = "Japão é o melhor em t.i"
//alert(nome + " tem  " + idade);
//alert(idade  + idade2)
console.log(nome);
console.log(idade)
console.log(frase.toUpperCase());
alert(frase.replace("Japão", "Brasil"));*/