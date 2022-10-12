let savedPassword = "5582"

class Vino {

    constructor(titulo, genero, precio , id) {
        this.titulo = titulo;
        this.genero = genero;       
        this.precio = precio;
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    
    }
    }
    const vinos = [
        new vino("Rutini" , "malbec" , 1200),
        new vino("Termidor" , "malbec" , 500),
        new vino("Cosecha tardia" , "blanco" , 700),
        new vino("trumpeter" , "cabernet sauvignon" , 1000)
    ]
    

    class birra {

        constructor(titulo, genero, precio , id) {
            this.titulo = titulo;
            this.genero = genero;       
            this.precio = precio;
            this.id = id;
        }
    
        asignarId(array) {
            this.id = array.length;
        }
    }

        const cervezas= [
            new cervezas("Quilmes" , "original" , 150 ),
            new cervezas("Quilmes" , "red" , 170),
            new cervezas("imperial" , "ipa" , 180 ),
            new cervezas("Salta" , "negra" , 150)
        ]

        class gaseosa {

            constructor(titulo, genero, precio , id) {
                this.titulo = titulo;
                this.genero = genero;       
                this.precio = precio;
                this.id = id;
            }
        
            asignarId(array) {
                this.id = array.length;
            }
        }
        const gaseosas= [
            new gaseosas("Coca-cola" , "cola" , 300),
            new gaseosas("Sprite" , "limonada" , 250 ),
            new gaseosas("Fanta" , "naranja" , 235),
            new gaseosas("Secco" , "pomelo" , 200)

        ]

function login() {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let userPassword = prompt("Ingresa tu clave, tienes " + (i + 1) + " intentos");
        if (userPassword === savedPassword) {
            ingresar = true
            alert("Ingreso confirmado, bienvenido a Fullscabio");
            break;
        }
        else {
            alert("Error, le quedan " + i + " intentos, vuelva a ingresar su clave")
        }
    }
    return ingresar
}

if (login()) {

    let opciones = prompt("Elegi una opcion para tomar: \n1 - Vinos. \n2 - Cervezas. \n3 - Gaseosa. \n4 - Mas caro a mas barato de la gondola. \n5 - Salir.  ");

    function ordenar(opciones, array){
        let arrayOrdenado = array.slice(0);
    
   while (opciones != "4") {

        switch (opciones) {
            case "1":
               let vinoteca = alert(vinos);
              break;

            case "2":
               let Cervezas = alert(cervezas);
             break;
            case "3":
                let gaseosas = alert(gaseosas);
                break;
            case "4":
                return arrayOrdenado.sort((a, b) => b.precio - a.precio);    
                
            default:
                Alert("la opcion no es valida ");
                break;
        }
        


    }



}
}