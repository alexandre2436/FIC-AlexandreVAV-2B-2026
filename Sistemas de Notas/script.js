function coletarDados() {

    let quantidade = Number(prompt("Quantas pessoas deseja cadastrar?"));

    let somaIdades = 0;
    let nomes = "";

    for (let i = 1; i <= quantidade; i++) {

        let nome = prompt("Digite o nome da pessoa " + i + ":");
        let idade = Number(prompt("Digite a idade de " + nome + ":"));

        nomes += nome + " - " + idade + " anos\n";
        somaIdades += idade;
    }

    let media = somaIdades / quantidade;

    alert(
        "Pessoas cadastradas:\n\n" +
        nomes +
        "\nMédia das idades: " + media.toFixed(2)
    );
}

function sistemaNotas() {

    let nota = Number(prompt("Digite a nota do aluno:"));

    if (nota >= 6) {
        alert("Aprovado!");
    } else if (nota >= 1) {
        alert("Recuperação!");
    } else {
        alert("Reprovado!");
    }
}
