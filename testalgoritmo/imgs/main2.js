class Test {
    ejercicio1(){
            let num1 = parseInt(document.getElementById("num1").value);
            let num2 = parseInt(document.getElementById("num2").value);
            let resp = document.getElementById("resp");
            let inicio, fin;
            let impares = "";

            if (num1 < num2) {
                inicio = num1 + 1;
                fin = num2;
            } else if (num1 > num2) {
                inicio = num2 + 1;
                fin = num1;
            } else {
                resp.textContent = "Los números ingresados son iguales";
                return;
            }

            for (let i = inicio; i < fin; i++) {
                if (i % 2 !== 0) {
                    impares += i + " ";
                }
            }

            resp.textContent = impares;
        }

    ejercicio2(){
        let resp = document.getElementById("resp");
        let num1 = parseInt(document.getElementById("num1").value);
        let suma = 0;

        suma = num1 + num1;

        resp.textContent = suma;
    }



    
    ejercicio3(){
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let resp = document.getElementById("resp");
        let inicio, fin;
        let serie = "";

        if (num1 < num2) {
            inicio = num1 + 1;
            fin = num2;
        } else if (num1 > num2) {
            inicio = num2 + 1;
            fin = num1;
        } else {
            resp.textContent = "Los números ingresados son iguales";
            return;
        }
    
        for (let i = inicio; i <= fin; i++) {
            serie += i + " ";
        }
    
        resp.textContent = serie;
    }
}

const test = new Test()