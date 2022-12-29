// Coercion inplicita

    var suma = 4 + "7"
    console.log(`la respuesta es ${suma} y su tipo es ${typeof suma}`)//47 y String

    var multi = 4 * "7"
    console.log(`la respuesta es ${multi} y su tipo es ${typeof multi}`)//28 y Number


//Coercion Explicita

    var a = 20;
    var b = a + "";
    console.log(`La respuesta es ${b} y su tipo es ${typeof b}`)//20 Y String

    var c = String(a)
    console.log(`La respues es de c es ${c} pero convertimos a en un ${typeof c} sin concatenar `)//20 y String
    
    var d = Number(b)
    console.log(`La respues es de c es ${d} pero convertimos a en un ${typeof d} sin concatenar`)//20 y Number




    