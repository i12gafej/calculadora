function mostrar(n){
    let cont = document.getElementById('caja').innerHTML;

    if(n == "="){
        let resul;
        let signo, psig;
        let primero;
        let segundo;
        
        if(cont[cont.indexOf('+')] == "+" || cont[cont.indexOf('-')] == "-" || cont[cont.indexOf('*')] == "*" || cont[cont.indexOf('/')] == "/"){
            if(cont[cont.indexOf('+')] == "+" ){
                psig = cont.indexOf('+');
            }
            if(cont[cont.indexOf('-')] == "-" ){
                psig = cont.indexOf('-');
            }
            if(cont[cont.indexOf('*')] == "*" ){
                psig = cont.indexOf('*');
            }
            if(cont[cont.indexOf('/')] == "/" ){
                psig = cont.indexOf('/');
            }
            signo = cont[psig];
            primero = parseFloat(cont.substring(0, psig), 10);
            segundo = parseFloat(cont.substring(psig + 1, cont.length), 10);
            if(signo == "+"){
                resul = primero + segundo;
            }   
            else if(signo == "-"){
                resul = primero - segundo;}
            else if(signo == "*"){
                resul = primero * segundo;}
            else if(signo == "/"){
                resul = primero / segundo;}
            document.getElementById('caja').innerHTML = resul;
        }
    
        if(signo == undefined)
            document.getElementById('caja').innerHTML = "err";
    }
    else if((eee(cont, "e") == 1 || cont == "err") && n == "e")
        document.getElementById('caja').innerHTML = "err";
    else if((punto(cont) == 1 || cont == "err") && n == "."){
        document.getElementById('caja').innerHTML = "err";  
    }
    else if(n == "." && eee(cont) == 1)
        document.getElementById('caja').innerHTML = "err";
    else{
        if(cont == "HOLA" || cont == "err"){
            cont = "";
        }
        if(cont == 0){
            if(n == 0){
                cont = 0;
            }
            else{
                cont = n;
            }
            document.getElementById('caja').innerHTML = cont;
            return true;
        }
        cont += n;
        document.getElementById('caja').innerHTML = cont;
    }
    return true;
}

function punto(v){
    let encontrado = 0;
    let mantisa = 0;
    let decimales = 0;
    for(i = 0; i < v.length; i++){
        if(encontrado == 0){
            if(v[i] == "."){
                encontrado++;
                mantisa = i;
            }
        }
        else{
            if(v[i] == ".")
                encontrado++;
        }
    }
    decimales = v.length - mantisa - 1;
    return encontrado;
}
function eee(v, item){
    let encontrado = 0;
    for(i = 0; i < v.length; i++){
        if(v[i] == item)
            encontrado++;
    }
    return encontrado;
}
