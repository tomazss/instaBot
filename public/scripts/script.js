let comentar = []

function adicionar(){
    let comentario = document.getElementById('userComentar').value;
    
    
    
 comentar.push(comentario)
 
 document.getElementById("res").innerHTML = `${comentar}  `;
 document.getElementById('userComentar').value = "";
 
}
function excluir(){
    
    
    
    comentar.pop()
    document.getElementById("res").innerHTML = `${comentar}  `;
    
   }


function novoUsuario() {

    let email = document.getElementById('userEmail').value;
    let senha = document.getElementById('userSenha').value;
    let url = document.getElementById('userUrl').value;
    let comentarios = document.getElementById('userPausa').value;
    let tempo = document.getElementById('userTempo').value;
    let pausa = document.getElementById('userPausaComent').value;
    


    let user = { email, senha, url, comentarios, tempo, pausa,comentar };

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(user)
    }
    fetch("http://18.230.108.13:3333/api/new", options)
    fetch("http://18.230.108.13:3333/api/all")
    document.getElementById('userEmail').value = "";
    document.getElementById('userSenha').value = "";
    document.getElementById('userUrl').value = "";
    document.getElementById('res').value = "";

}
