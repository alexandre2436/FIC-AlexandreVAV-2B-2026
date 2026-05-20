// Array para guardar os alunos
let alunos = [];

function adicionar() {

    // Pega os valores dos inputs
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);

    // Verifica se os campos estão vazios
    if (nome === "" || idade === 0) {
        alert("Preencha nome e idade!");
        return;
    }

    // Cria o objeto aluno
    let aluno = {
        nome: nome,
        idade: idade
    };

    // Adiciona no array
    alunos.push(aluno);

    // Atualiza a lista na tela
    mostrarLista();

    // Limpa os campos
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
}

// Função para mostrar os alunos
function mostrarLista() {

    let lista = document.getElementById("Lista");

    // Limpa a lista antes de atualizar
    lista.innerHTML = "";

    // Percorre os alunos
    alunos.forEach(function(aluno) {

        let item = document.createElement("li");

        item.textContent =
            `Nome: ${aluno.nome} | Idade: ${aluno.idade}`;

        lista.appendChild(item);
    });
}

// Função para analisar a turma
function analisar1() {

    let resultado = document.getElementById("resultado");

    if (alunos.length === 0) {
        resultado.textContent = "Nenhum aluno cadastrado.";
        return;
    }

    // Soma das idades
    let soma = 0;

    alunos.forEach(function(aluno) {
        soma += aluno.idade;
    });

    // Média
    let media = soma / alunos.length;

    resultado.textContent =
        `Total de alunos: ${alunos.length} | Média das idades: ${media.toFixed(1)}`;
}
