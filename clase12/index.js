function validar(){
    var input = document.getElementById('nombre').value;
    if(input===""){
        alert('Falta el nombre');
        document.getElementById('nombre').focus();
        return false;
    }
    
    input = document.getElementById('apellido1').value;
    if(input===""){
        alert('Falta el apellido 1')
        document.getElementById('apellido1').focus();
        return false;
    }

    input = document.getElementById('apellido2').value;
    if(input===""){
        alert('Falta el apellido 2')
        document.getElementById('apellido2').focus();
        return false;
    }

    input = document.getElementById('edad').value;
    if(isNaN(input)){
        alert('Falta la edad o un valor numerico')
        document.getElementById('edad').focus();
        return false;
    }
    input = document.getElementById('edad').value;
    if(input===""){
        alert('Falta la edad')
        document.getElementById('edad').focus();
        return false;
    }

    input= document.getElementById('color').selectedIndex;
    if(input==0){
        alert("Falta el color")
        document.getElementById('color').focus();
        document.getElementById('color').style.backgroundColor="red";
        return false;

    }
   input= document.getElementById('correo').value;
   if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor)) ) {
    alert('No tiene formato correo')
    document.getElementById('correo').focus()
    return false;
} 
   
    return true;
}

function mensaje(mensaje){
    alert(mensaje);
}

function calcular(num1,num2){
    return num1+num2;
}
