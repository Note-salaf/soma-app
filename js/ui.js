export const inputNumero1 = document.querySelector('#inputNumero1')
export const inputNumero2 = document.querySelector('#inputNumero2')
export const btnCalcular = document.querySelector('#btnCalcular')
export const informaResposta = document.querySelector('.informaResposta')

export function mostrarResultado(valor) {
    informaResposta.textContent = valor
    informaResposta.classList.remove('erro')
}

export  function mostrarErro(valor) {
    informaResposta.textContent = valor
    informaResposta.classList.add('erro')
}

export function limparResultado() {
    mostrarResultado('')
}