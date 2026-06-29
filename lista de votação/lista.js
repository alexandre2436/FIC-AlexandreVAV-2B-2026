 // Array para guardar os alunos
        let alunos = [];

        function adicionar() {

            // Pega os valores
            let nome = document.getElementById("nome").value;
            let idade = Number(document.getElementById("idade").value);

            // Verifica campos vazios
            if (nome === "" || idade === 0) {
                alert("Preencha nome e idade!");
                return;
            }

            // Cria objeto
            let aluno = {
                nome: nome,
                idade: idade
            };

            // Adiciona no array
            alunos.push(aluno);

            // Atualiza lista
            mostrarLista();

            // Limpa inputs
            document.getElementById("nome").value = "";
            document.getElementById("idade").value = "";
        }

        function mostrarLista() {

            let lista = document.getElementById("lista");

            // Limpa lista
            lista.innerHTML = "";

            // Percorre alunos
            alunos.forEach(function(aluno) {

                let item = document.createElement("li");

                let mensagem = "";

                // Sistema de votação
                switch (true) {

                    case aluno.idade < 16:
                        mensagem = "Não pode votar";
                        break;

                    case aluno.idade >= 16 && aluno.idade < 18:
                        mensagem = "Voto opcional";
                        break;

                    case aluno.idade >= 18 && aluno.idade < 70:
                        mensagem = "Voto obrigatório";
                        break;

                    case aluno.idade >= 70:
                        mensagem = "Voto opcional";
                        break;

                    default:
                        mensagem = "Idade inválida";
                }

                item.textContent =
                    `Nome: ${aluno.nome} | Idade: ${aluno.idade} | ${mensagem}`;

                lista.appendChild(item);
            });
        }

        function verificarVoto() {

            let nome = document.getElementById("nome").valuer;
            let idade = document.getElementById("idade").valuer;

            let mensagem = "";

            let (nome === "" || idade <= 0) 
            alert("preencha os campos corretamente!")
            return;

            // verificação de votação
            if(idade < 16);
            mensagem ("Não pode votar");

            
        }
