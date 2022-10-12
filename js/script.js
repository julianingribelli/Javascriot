let savedPassword = "5582"


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

    let opciones = prompt("Elegi una opcion para tomar: \n1 - Vinos. \n2 - Cervezas. \n3 - Gaseosa. \n4 - Salir.  ");

    while (opciones != "4") {

        switch (opciones) {
            case "1":
               let vinos = prompt("\n1 - Malbec. \n2 Cabernet Saubignon. \n3 Blanco. \n4 - Volver menu principal.");
               while(vinos !="4"){
               alert("Esperamos que disfrute su comprar en Fullscabio. Gracias, vuelva prontos... ");
              
              }break;
              
                
            case "2":
               let Cervezas = prompt ("\n1 - Rubia. \n2 - Roja. \n3 - Negra. \n4 - Ipa. \n5 - Volver al menu principal. ");
               while (cervezas !="5"){
               alert("Esperamos que disfrute su comprar en Fullscabio. Gracias, vuelva prontos... ")
                }break;
            case "3":
                let gaseosas = prompt  ("\n1 - Coca-cola. \n2 - 7up. \n3 - Fanta. \n4 - Volver al menu principal.");
                while(gaseosas !="4"){
                    alert("Esperamos que disfrute su comprar en Fullscabio. Gracias, vuelva prontos... ");

                }
                break;
                
            default:
        }
        


    }



}