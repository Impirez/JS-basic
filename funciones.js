// Declarativas y funciones de expresion

    //Declarativas
    //En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:
        function Funcion1(){//dentro de estas llaves ponemos la accion que queremos que se ejecute cuando la llamemos
            return 3;//devuelve este valor
        }//cuando llamemos a la funcion nos devolvera 3
        //para llamar a la funcion tenemos que poner su nombre con los parentesis:
        Funcion1()//3


    //Funciones de Expresion
    //En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.
        const Funcion2 = function(){
            return 5;//devuelve este valor
        }
        Funcion2();


//Las funciones tambien pueden pedir parametros para completar dicha funcion
//ejemplo
        function ejemplo(x, y) {
            resultado = ( ((x**2) + (y**2) + (x+y)) / 2 )//operacion matematica
            return resultado//devuelve el valor
        }

        ejemplo(1,2)//4
        //dentro de los aprentesis pones los vales que queremos que tengan x e y respectivamente 

