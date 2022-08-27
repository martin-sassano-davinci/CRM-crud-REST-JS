export function mostrarAlerta(msj){

    const alerta = document.querySelector('.bd-red-100');

    if (!alerta) {
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
            <strong class="font-bold">Error! </strong>
            <span class="block sm:inline" > ${msj} </span
        `;

        const form = document.querySelector('#formulario');
        form.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}
export const validarInputs = (obj) => {
    return !Object.values(obj).every( input => input !== '');
}