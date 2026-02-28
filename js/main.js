import { somar } from './math.js'
import { inputNumero1, inputNumero2, btnCalcular, mostrarResultado, mostrarErro, limparResultado } from './ui.js'
import { validarNumeros } from './validation.js'



inputNumero1.addEventListener('input', limparResultado)
inputNumero2.addEventListener('input', limparResultado)

btnCalcular.addEventListener('click', () => {
    const valor1 = inputNumero1.value.trim()
    const valor2 = inputNumero2.value.trim()

    const validacao = validarNumeros(valor1, valor2)

    if (!validacao.valido) {
        mostrarErro(validacao.mensagem)
        return
    }

    const num1 = Number(valor1)
    const num2 = Number(valor2)

    const total = somar(num1, num2)
    mostrarResultado(total)
})
