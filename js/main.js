/*var nome = "Ritchie Blackmore"

alert(" O bruxo da guitarra: " + nome);

var frase = "Japão é o melhor time do mundo";

console.log(frase.replace("Japão","Alemanha"));
console.log(frase.toUpperCase());*/


/*var lista =["Maça","Graviola","Cupuaçu","Caju","Acerola"];
console.log(lista);
lista.push("Limão");
alert(lista);
lista.pop();
alert(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
console.log(lista.join("-"));*/

/*var musico ={ nome:"Ian Paice", instrumento:"Bateria"}
console.log(musico);
console.log(musico.nome);
alert(musico.instrumento);*/

/*var musico =[{ nome:"Ian Paice", instrumento:"Bateria"}, {nome:"Ian Gillan" , instrumento: "vocal"}]
console.log(musico);

alert(musico[1].nome);*/

/*var idade = prompt("Qual sua idade");
if (idade >=18){
    alert("Maior de idade")
}
else{
    alert("Menor de idade");
}*/

/*var count = 0;
while(count < 5){
    console.log(count);
    count = count+1;
}*/

/*var count;
for(count=0;count <=5;count++){
    alert(count);
}*/


/*var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/

/*function soma(n1,n2){
    return n1+n2;
}
alert(soma(5,15));*/


/*function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome)
}
alert(setReplace("Vai Japão","Japão","Brasil"));*/


function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

/*var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));


// variavel global

var validar =0;
function validaIdade(idade){
     validar;
    if(idade>=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade);
console.log(validar);*/


/*function clicar(){
    alert("valeu !!!!");
}*/

function clicar(){
    document.getElementById("agradecimento").innerHTML="Valeu por clicar";
}

function redirecionar(){
    window.open("https://globallabs.academy/");
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Valeu !!";
    //alert("trocar texto");
    elemento.innerHTML="Valeu !!!";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Voltar !!";
    elemento.innerHTML=" Voltar";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}