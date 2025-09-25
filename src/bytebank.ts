let saldo: number = 3000

const elementoSaldo = document.querySelector('span.valor') as HTMLElement

if (elementoSaldo !== null) {
  elementoSaldo.textContent = saldo.toString()
}

const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement
elementoFormulario.addEventListener('submit', (e) => {
  e.preventDefault()

  if (!elementoFormulario.checkValidity()) {
    alert('Por favor, preencha todos os campos da transação :)')
    return
  }

  const inputTipoTransação = elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement
  const inputValor = elementoFormulario.querySelector('#valor') as HTMLInputElement
  const inputData = elementoFormulario.querySelector('#data') as HTMLInputElement

  let tipoTransacao = inputTipoTransação.value
  let valor = inputValor.valueAsNumber
  let data = new Date(inputData.value)

  if (inputTipoTransação.value == 'Depósito') {
    saldo += inputValor.valueAsNumber
  } else if (inputTipoTransação.value == 'Transferência' || inputTipoTransação.value =='Pagamento de Boleto') {
    saldo -= inputValor.valueAsNumber
  }

  const novaTransacao = {
    tipoTransacao,
    valor,
    data
  }

  console.log(novaTransacao)
  elementoFormulario.reset()
  elementoSaldo.textContent = saldo.toString()
})