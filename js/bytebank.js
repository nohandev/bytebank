var saldo = 3000;
var elementoSaldo = document.querySelector('span.valor');
if (elementoSaldo !== null) {
    elementoSaldo.textContent = saldo.toString();
}
var elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert('Por favor, preencha todos os campos da transação :)');
        return;
    }
    var inputTipoTransação = elementoFormulario.querySelector('#tipoTransacao');
    var inputValor = elementoFormulario.querySelector('#valor');
    var inputData = elementoFormulario.querySelector('#data');
    var tipoTransacao = inputTipoTransação.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    if (inputTipoTransação.value == 'Depósito') {
        saldo += inputValor.valueAsNumber;
    }
    else if (inputTipoTransação.value == 'Transferência' || inputTipoTransação.value == 'Pagamento de Boleto') {
        saldo -= inputValor.valueAsNumber;
    }
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
    elementoSaldo.textContent = saldo.toString();
});
