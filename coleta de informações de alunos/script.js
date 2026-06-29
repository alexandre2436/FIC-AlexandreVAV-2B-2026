function processarDados() {

    // Entrada dos dados
    let nomes = prompt("Digite os nomes separados por vírgula:");
    let idades = prompt("Digite as idades separadas por vírgula:");

    // Split
    let listaNomes = nomes.split(",");
    let listaIdades = idades.split(",");

    // Ordenar nomes
    listaNomes.sort();

    let soma = 0;
    let maiores = "";

    for (let i = 0; i < listaIdades.length; i++) {
        listaIdades[i] = Number(listaIdades[i]);
        soma += listaIdades[i];

        if (listaIdades[i] >= 18) {
            maiores += listaNomes[i] + " (" + listaIdades[i] + " anos)<br>";
        }
    }

    let media = soma / listaIdades.length;

    // Mostrar tipos de dados
    let tipos =
        "Tipo de nomes: " + typeof nomes + "<br>" +
        "Tipo da primeira idade: " + typeof listaIdades[0] + "<br><br>";

    // Exibir no HTML
    document.getElementById("resultado").innerHTML =
        "<h2>Resultado</h2>" +

        "<b>Nomes Ordenados:</b><br>" +
        listaNomes.join("<br>") +

        "<br><br><b>Idades:</b><br>" +
        listaIdades.join("<br>") +

        "<br><br><b>Média das Idades:</b> " + media.toFixed(2) +

        "<br><br><b>Maiores de 18 anos:</b><br>" +
        maiores +

        "<br><br><b>Tipos de Dados</b><br>" +
        tipos;
}
