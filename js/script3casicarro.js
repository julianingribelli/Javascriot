
const usuarios = [{
    nombre: 'morella',
    mail: 'morellaingribelli@mail.com',
    pass: 'morella87'
},
{
    nombre: 'martin',
    mail: 'martiningribelli@mail.com',
    pass: 'martinpalermo'
},
{
    nombre: 'julian',
    mail: 'julianingribelli@mail.com',
    pass: 'bocajuniors'
}]
const bebidas = [{
    nombre: "Uvita",
    tipo: "vinotinto",
    precio: 500,
    img: "./img/uvita.jpeg"
}, {
    nombre: "Redipa",
    tipo: "cerveza",
    precio: 300,
    img: ' '
}, {
    nombre: "Dadà",
    tipo: "vino",
    precio: 800,    
    img: './img/dada_8_chocolat_74569.jpg'
}, {
    nombre: "Fanta",
    tipo: "gaseosa",
    precio:200,
    img: './img/Fanta-500Ml.jpg'
}]

const mailLogin = document.getElementById('emailLogin'),
    passLogin = document.getElementById('passwordLogin'),
    recordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    contTarjetas = document.getElementById('tarjetas'),
    toggles = document.querySelectorAll('.toggles');

function validarUsuario(usersDB, user, pass) {
    let encontrado = usersDB.find((userDB) => userDB.mail == user);
    
    if (typeof encontrado === 'undefined') {
        return false;
    } else {
        
        if (encontrado.pass != pass) {
            return false;
        } else {
            return encontrado;
        }
    }
}

function guardarDatos(usuarioDB, storage) {
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }
    storage.setItem('usuario', JSON.stringify(usuario));
}

function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}

function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}

function recuperarUsuario(storage) {
    let usuarioEnStorage = JSON.parse(storage.getItem('usuario'));
    return usuarioEnStorage;
}

function estaLogueado(usuario) {
    if (usuario) {
        saludar(usuario);
        mostrarInfobebidas(bebidas);
        presentarInfo(toggles, 'd-none');
    }
}

function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}

function mostrarInfoMascotas(array) {
    contTarjetas.innerHTML = '';
    array.forEach(element => {
        let html = `<div class="card cardbebida" id="tarjeta${element.nombre}">
                <h3 class="card-header" id="nombreBebidas">Nombre: ${element.nombre}</h3>
                <img src="${element.img}" alt="${element.nombre}" class="card-img-bottom" id="fotobebida">
                <div class="card-body">
                    <p class="card-text" id="tipoBebidas">tipo: ${element.tipo}</p>
                    <p class="card-text" id="precioBebidas">precio: ${element.precio} pesos</p>
                    
                </div>
            </div>`;
        contTarjetas.innerHTML += html;
    });
}

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

   
        let data = validarUsuario(usuarios, mailLogin.value, passLogin.value);

        if (!data) {
            alert(`error, volver a cargar usuario y contraseña`);
        } else {
            
            if (recordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }
            
            modal.hide();
            
            mostrarInfoBebidas(bebidas);
            presentarInfo(toggles, 'd-none');
        }
   // }
});

btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(toggles, 'd-none');
});
window.onload = () => estaLogueado(recuperarUsuario(localStorage)); 