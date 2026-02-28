export function validarNumeros(valor1, valor2) {
    if (valor1 === '' || valor2 === '') {
        return {
            valido: false,
            mensagem: 'Preencha os dois campos.'
        }
    }

    if (isNaN(valor1) || isNaN(valor2)) {
        return {
            valido: false,
            mensagem: 'Digite apenas números.'
        }
    }

    return {
        valido: true,
        mensagem: ''
    }
}