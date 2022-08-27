import { nuevoCliente } from "./API.js";
import { mostrarAlerta, validarInputs } from "./funciones.js";

(function() {
    
    const form = document.querySelector('#formulario');

    form.addEventListener('submit', validarForm);

    function validarForm(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }
        
        if (validarInputs(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return
        }
        nuevoCliente(cliente);
    }

    


}());