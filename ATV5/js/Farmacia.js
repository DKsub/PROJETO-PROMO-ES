function Supermercado() {
    const preco = document.getElementById('precoProd').value;
    const valorComDesconto = (preco * 2) + (preco / 2);
    document.getElementById('resultadoSupermercado').textContent = `Promoção: R$ ${valorComDesconto.toFixed(2)} pela compra de 3 unidades`;
}


function LanhouseDoBairro() {
    const preco = document.getElementById('precoTempoUso').value;
    const tempo = document.getElementById('tempoTotaluso').value;
    const minutosTotal = Math.ceil(tempo / 15);
    const valor = minutosTotal * preco;
    document.getElementById('resultadoLanhouse').textContent = `Valor para ser pago: R$ ${valorTotal.toFixed(2)}`;
}


function DescontoFarmacia() {
    const NomeMedi = document.querySelector("#NomeMed")
    const preco = parseFloat(document.getElementById('PrecoMed').value);

    if (isNaN(preco) || preco <= 0) {
        document.getElementById('resultadoFar').textContent = "Por favor insira um valor válido.";
        return;
    }

    const valorTotal = preco * 2; 

    const valorComDesconto = (valorTotal % 1 === 0) ? valorTotal - 1 : Math.floor(valorTotal);

    document.getElementById('resultadoFar').textContent = ` Promoção De: ` + NomeMedi.value + ` R$ ` +  `${valorComDesconto.toFixed(2)}`;
}
   



