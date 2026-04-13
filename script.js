
function activaLetra(eLemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((Letra, i)=>{
        setTimeout(()=>{
            eLemento.innerHTML += Letra;
        }, 75 * i);
    });
}


const titulo = document.querySelector('.digitando');
activaLetra(titulo);
