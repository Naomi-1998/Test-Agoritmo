class Test {
    ejercicio1(){
        let num1 = parseInt(document.getElementById("num1").value);
        // let num2 = parseInt(document.getElementById("num2").value);
        // let num3 = parseInt(document.getElementById("num3").value);
        let resp = document.getElementById("resp");
        let suma;

        suma = num1 + num1;
        // suma = num1 - num1;
        // suma = num1 * num1;
        // suma = num1 / num1;


        resp.textContent = suma;
    }

    ejercicio2(){
        let num1 = parseInt(document.getElementById("num1").value);
        // let num2 = parseInt(document.getElementById("num2").value);
        // let num3 = parseInt(document.getElementById("num3").value);
        let resp = document.getElementById("resp");


        
        resp.textContent = resp;
    }

    ejercicio3(){
        let num1 = parseInt(document.getElementById("num1").value);
        // let num2 = parseInt(document.getElementById("num2").value);
        // let num3 = parseInt(document.getElementById("num3").value);
        let resp = document.getElementById("resp");


        
        resp.textContent = resp;
    }
}

const test = new Test()