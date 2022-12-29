//Tipos de variables

//Var
    var nombre1 = "cesar"//tipo string
    console.log(nombre1)//cesar
    //actualmente es una mala practica seguir usando var para asiganar variables ya tiene un alcanze global


//Let
    let nombre2 = "Juan"//tipo string
    console.log(nombre2)//juan
    //actualmente usar let es una buena practica por que apartir de EcmaScript6 se añadio let que era una variable mas
    //reservada q var


//Const
    const oxigeno = "H20"//tipo string
    console.log(oxigeno)//h2O
    //la variable const se usa para variables que su contenido no va a cambiar por ejemplo el oxigeno, 
    //siempre va a ser igual que H2O

    
//Como saber el tipo de una variable
    function cualEsElTipo(tipo){
       return typeof tipo //gracias a typeof esto lo que va hacer es darnos el tipo de variable que es
    }

