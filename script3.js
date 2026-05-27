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



switch(true) {

    case aluno.idade < 16:
        console.log("Não pode votar");
         break;

        case aluno.idade <= 16:
            console.log("pode votar")
            break;

                default:
                    console.log("inválido")
}
