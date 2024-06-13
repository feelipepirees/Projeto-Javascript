function somar(){
    var num1; //Declaração de vareaveis
    var num2;
    var res;
    //Coletar os dados do formulario
    num1 = parseInt (document.getElementById("num1").value);
    num2 = parseInt (document.getElementById("num2").value);
    //Realizar o calculo
    res = num1 + num2;
    document.getElementById("resultado").innerHTML = res;
}//Fim do método somar 

function subtrair(){
    var num1; //Declaração de vareaveis
    var num2;
    var res;
    //Coletar os dados do formulario
    num1 = parseInt (document.getElementById("num1").value);
    num2 = parseInt (document.getElementById("num2").value);
    //Realizar o calculo
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = res;
}//fim do método subtrair

function multiplicar(){
    var num1; //Declaração de vareaveis
    var num2;
    var res;
    //Coletar os dados do formulario
    num1 = parseInt (document.getElementById("num1").value);
    num2 = parseInt (document.getElementById("num2").value);
    //Realizar o calculo
    res = num1 * num2;
    document.getElementById("resultado").innerHTML = res;
}//fim do metódo mutiplicar

function dividir(){
    var num1; //Declaração de vareaveis
    var num2;
    var res;
    //Coletar os dados do formulario
    num1 = parseInt (document.getElementById("num1").value);
    num2 = parseInt (document.getElementById("num2").value);
    //Realizar o calculo
    if(num2 <=0){
        res = "Impossível dividir por zero!"
    }else{
        res = num1 / num2;
    }    
    document.getElementById("resultado").innerHTML = res;
}// fim do metodo dividir

function tabuada(){
    var num1;
    var num2;

    //coletar os números
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);

    var resNum1 = "tabuada do " + num1;
    var resNum2 = "tabuada do " + num2;

    for(i=0;i<=10;i++){
        resNum1 += "\n" + num1 + " * " + i + " = " + (num1 * i);
        resNum2 += "\n" + num2 + " * " + i + " = " + (num2 * i);
}
    document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n" + resNum2;

}//fim do metodo tabuada 

function potencia(){
    var num1;//Declarar vareaveis 
    var num2;
    var res;

    //coletar os daods do formulario
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);

    //Relizar o cálculo
     
    res = Math.pow(num1,num2);//calcula a pontência
    document.getElementById("resultado").innerHTML = res;
    
}//fim do método

function raiz(){
    var num1;//Declarar vareaveis 
    var num2;
    var resNum1;
    var resNum2;

    //coletar os daods do formulario
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);

    //Relizar o cálculo
    resNum1 = Math.sqrt(num1);
    resNum2 = Math.sqrt(num2);
             
    document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n" + resNum2;

    
}
