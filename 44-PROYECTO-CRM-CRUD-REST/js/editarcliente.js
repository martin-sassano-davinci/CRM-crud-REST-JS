import { editarCliente, obtenerCliente } from "./API.js";
import { validarInputs } from "./funciones.js";

(function () {
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    document.addEventListener('DOMContentLoaded', async () => {
        const paramsURL = new URLSearchParams(window.location.search);

        const clienteId = paramsURL.get('id');

        const cliente = await obtenerCliente(clienteId);

        mostrarCliente(cliente);
    })
    function mostrarCliente(cliente) {
        
        const { nombre, email, telefono, empresa, id} = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;
    }
    function validarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        };

        if (validarInputs(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return
        }
        editarCliente(cliente);
    }
})();
