let voto = 0;

while (voto !== 80) {
    let idade = Number(prompt("Digite sua idade:"));

    switch (true) {
        case (idade < 16):
            alert("Não pode votar.");
            break;

        case (idade >= 16 && idade < 18):
            alert("Voto facultativo.");
            break;

        case (idade >= 18 && idade < 70):
            alert("Voto obrigatório.");
            break;

        default:
            alert("Voto facultativo.");
            break;
    }

    voto = Number(prompt("Digite o número do candidato (80 para encerrar):"));

    if (voto === 80) {
        alert("Voto registrado. Programa encerrado!");
    } else {
        alert("Número diferente de 80. Próximo eleitor.");
    }
}
